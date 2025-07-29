"use client";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CollaboratorCardProps {
  delay?: number;
}

export function CollaboratorCard({ delay = 1.0 }: CollaboratorCardProps) {
  return (
    <AnimatedText delay={delay}>
      <Card className="w-full max-w-sm mx-auto border-2 border-primary/20 hover:border-primary/40 transition-colors">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <Image
                src="/lucas-taylor.jpg"
                alt="Lucas Taylor - Best Collaborator"
                width={80}
                height={80}
                className="rounded-full border-4 border-primary/30"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.parentElement?.querySelector(
                    ".avatar-fallback"
                  ) as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="avatar-fallback hidden w-20 h-20 rounded-full bg-primary/20 border-4 border-primary/30 items-center justify-center">
                <Icons.user className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Lucas Taylor
              </h3>
              <p className="text-sm text-muted-foreground">Best Collaborator</p>
              <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <Icons.gmail className="w-3 h-3" />
                <span>stormrunner06106@gmail.com</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedText>
  );
}
