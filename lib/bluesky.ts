const { BskyAgent } = require("@atproto/api");

const agent = new BskyAgent({ service: "https://bsky.social" });

async function login(handle: string, appPassword: string) {
  await agent.login({ identifier: handle, password: appPassword });
  return agent;
}

async function getMyPosts(
  agent: any,
  did: string | null = null,
  firstPage: boolean = false
) {
  const profile = await agent.getProfile({ actor: did || agent.session?.did });

  const feed = await agent.getAuthorFeed({
    actor: profile.data.did,
    limit: firstPage ? 3 : 100,
  });

  // Filter out replies (posts with parents) and only keep original posts
  const originalPosts = feed.data.feed.filter((item: any) => {
    // Check if the post has a parent (reply) or is an original post
    return !item.post.record.reply || !item.post.record.reply.parent;
  });

  // Sort posts by date (newest first)
  const sortedFeed = originalPosts.sort((a: any, b: any) => {
    const dateA = new Date(a.post.indexedAt);
    const dateB = new Date(b.post.indexedAt);
    return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
  });

  return sortedFeed;
}

function getPostUrl(post: any): string {
  const uri = post.post.uri;
  const handle = post.post.author.handle;

  // Extract the rkey (last part of the URI after the last slash)
  const rkey = uri.split("/").pop();

  return `https://bsky.app/profile/${handle}/post/${rkey}`;
}

export { getMyPosts, getPostUrl, login };
