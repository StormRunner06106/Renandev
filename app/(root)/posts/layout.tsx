import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pagesConfig.posts.metadata.title,
  description: pagesConfig.posts.metadata.description,
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
