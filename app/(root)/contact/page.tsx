import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {SocialLinks.map((social, index) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background border-2 border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <social.icon
                    size={48}
                    className="text-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 truncate max-w-full">
                  {social.username}
                </p>

                {/* Tooltip */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="bg-popover text-popover-foreground px-3 py-2 rounded-md text-sm shadow-lg border">
                    <p className="font-medium">{social.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {social.username}
                    </p>
                    <p className="text-xs text-primary">Click to visit</p>
                  </div>
                  <div className="w-2 h-2 bg-popover transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1 border-b border-r"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
