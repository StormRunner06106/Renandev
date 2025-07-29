import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  showAllPostsLink?: boolean;
}

export default function PageContainer({
  title,
  description,
  children,
  showAllPostsLink = false,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader
          title={title}
          description={description}
          showAllPostsLink={showAllPostsLink}
        />
        <div className="mx-6">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
