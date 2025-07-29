import Link from "next/link";
import { Icons } from "./icons";

interface PageHeaderProps {
  title: string;
  description: string;
  showAllPostsLink?: boolean;
}

export default function PageHeader({
  title,
  description,
  showAllPostsLink = false,
}: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col mt-5 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        {showAllPostsLink && (
          <div className="flex items-center">
            <Link
              href="https://bsky.app/profile/stormrunner06106.bsky.social"
              target="_blank"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Show all posts</span>
              <Icons.externalLink size={16} />
            </Link>
          </div>
        )}
      </div>
      <hr className="my-6" />
    </>
  );
}
