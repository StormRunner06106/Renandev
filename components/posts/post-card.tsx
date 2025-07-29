import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlueskyPost } from "@/config/posts";
import { getPostUrl } from "@/lib/bluesky";

interface PostCardProps {
  posts: BlueskyPost[];
}

export default function PostCard({ posts }: PostCardProps) {
  // Split posts into three columns
  const column1 = posts.filter((_, index) => index % 3 === 0);
  const column2 = posts.filter((_, index) => index % 3 === 1);
  const column3 = posts.filter((_, index) => index % 3 === 2);

  const renderPost = (post: BlueskyPost, id: number) => {
    const postUrl = getPostUrl(post);
    const embed = post.post.embed;
    const hasImages =
      embed?.$type === "app.bsky.embed.images#view" &&
      embed.images &&
      embed.images.length > 0;
    const firstImage = hasImages && embed.images ? embed.images[0] : null;

    // Check for external link embed
    const hasExternalLink =
      embed?.$type === "app.bsky.embed.external#view" && embed.external;
    const externalLink = hasExternalLink ? embed.external : null;

    return (
      <Link href={postUrl} target="_blank" key={id}>
        <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground transition-colors mb-4">
          <div className="flex flex-col justify-between rounded-md p-6">
            {/* Header with author info */}
            <div className="flex flex-row justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                {post.post.author.avatar && (
                  <Image
                    src={post.post.author.avatar}
                    alt={
                      post.post.author.displayName || post.post.author.handle
                    }
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h3 className="font-bold text-sm">
                    {post.post.author.displayName || post.post.author.handle}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    @{post.post.author.handle}
                  </p>
                </div>
              </div>
              <Icons.gitRepoIcon size={20} className="text-muted-foreground" />
            </div>

            {/* Post content */}
            <div className="space-y-4 flex-1">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.post.record.text}
              </p>

              {/* Thumbnail image */}
              {firstImage && (
                <div className="relative w-full h-32 rounded-md overflow-hidden">
                  <Image
                    src={firstImage.thumb}
                    alt={firstImage.alt || "Post image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* External link thumbnail */}
              {externalLink && (
                <div className="border rounded-md p-3 bg-muted/50">
                  <div className="flex items-start space-x-3">
                    {externalLink.thumb && (
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={externalLink.thumb}
                          alt={externalLink.title || "Link thumbnail"}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {externalLink.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {externalLink.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {externalLink.uri}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with engagement stats */}
            <div className="flex items-center justify-between mt-4 pt-2 border-t">
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icons.star size={12} />
                  <span>{post.post.likeCount}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icons.post size={12} />
                  <span>{post.post.replyCount}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icons.gitBranch size={12} />
                  <span>{post.post.repostCount}</span>
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {new Date(post.post.indexedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Column 1 */}
      <div className="flex flex-col">
        {column1.map((post, index) => renderPost(post, index * 3))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col">
        {column2.map((post, index) => renderPost(post, index * 3 + 1))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col">
        {column3.map((post, index) => renderPost(post, index * 3 + 2))}
      </div>
    </div>
  );
}
