"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { lucasConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";

export default function ContactPage() {
  return (
    <PageContainer
      title="Renan and Lucas (Collaborator)"
      description="Get in touch with us for collaboration opportunities and project discussions."
    >
      <div className="space-y-12">
        {/* Renan's Contact Block */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-heading mb-8">Renan Martins</h2>
          <div className="flex justify-center items-center min-h-[40vh]">
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
        </div>

        {/* Lucas's Contact Block */}
        <div className="text-center">
          <h2 className="text-2xl font-heading mb-8">
            Lucas Taylor (Collaborator)
          </h2>
          <div className="flex justify-center items-center min-h-[40vh]">
            <div className="max-w-md mx-auto">
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background border-2 border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-24 h-24 mb-6">
                  <Image
                    src={lucasConfig.avatar}
                    alt={`${lucasConfig.name} - ${lucasConfig.role}`}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-primary/30"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.parentElement?.querySelector(
                        ".avatar-fallback"
                      ) as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="avatar-fallback hidden w-24 h-24 rounded-full bg-primary/20 border-4 border-primary/30 items-center justify-center">
                    <Icons.user className="w-12 h-12 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {lucasConfig.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {lucasConfig.role}
                </p>
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  {lucasConfig.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mb-4">
                  <Link
                    href={lucasConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Icons.gitHub className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </Link>
                  <Link
                    href={lucasConfig.socials.bluesky}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Icons.twitter className="w-4 h-4" />
                    <span className="text-sm">Bluesky</span>
                  </Link>
                </div>

                <Link
                  href={`mailto:${lucasConfig.email}`}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Icons.gmail className="w-4 h-4" />
                  <span className="text-sm">{lucasConfig.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
