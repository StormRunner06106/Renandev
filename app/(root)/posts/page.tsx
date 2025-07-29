"use client";

import { useEffect, useState } from "react";

import PageContainer from "@/components/common/page-container";
import PostCard from "@/components/posts/post-card";
import { Button } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";

const POSTS_PER_PAGE = 10;

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlueskyPosts() {
      setLoading(true);
      setError(null);
      try {
        const handle = "stormrunner06106.bsky.social";
        const appPassword = "Griffindor!@#$1234";
        const { login, getMyPosts } = await import("@/lib/bluesky");
        const agent = await login(handle, appPassword);
        const blueskyPosts = await getMyPosts(agent);
        setPosts(blueskyPosts);
      } catch (err) {
        setError("Failed to fetch posts from Bluesky");
      } finally {
        setLoading(false);
      }
    }
    fetchBlueskyPosts();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  console.log(page, paginatedPosts);

  if (loading) {
    return (
      <PageContainer
        title={pagesConfig.posts.title}
        description={pagesConfig.posts.description}
      >
        <div className="flex justify-center items-center py-8">
          <p>Loading posts...</p>
        </div>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer
        title={pagesConfig.posts.title}
        description={pagesConfig.posts.description}
      >
        <div className="flex justify-center items-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title={pagesConfig.posts.title}
      description={pagesConfig.posts.description}
      showAllPostsLink={true}
    >
      <PostCard posts={paginatedPosts} />
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mb-10">
          <Button
            variant="secondary"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </Button>
          <span className="mx-2">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="secondary"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </PageContainer>
  );
}
