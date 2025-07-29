"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CollaboratorButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 px-3"
        aria-label="Show collaborator"
      >
        Collaborator
      </Button>

      {/* Popup */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div className="bg-background border border-border rounded-lg shadow-lg p-4 w-64">
            <div className="w-full max-w-sm mx-auto transition-colors">
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <img
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
                    <p className="text-sm text-muted-foreground">
                      Best Collaborator
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                      <Icons.gmail className="w-3 h-3" />
                      <span>stormrunner06106@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 h-6 w-6 p-0"
            >
              <Icons.close className="w-3 h-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
