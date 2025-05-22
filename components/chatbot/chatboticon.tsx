"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatbotIconProps {
  className?: string;
}

export function ChatbotIcon({ className }: ChatbotIconProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="outline"
        className={cn(
          "fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8",
          className
        )}
        aria-label="Open chatbot"
      >
        <MessageSquare className="h-6 w-6 text-primary" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
          </span>
        </span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>How can I help you today?</DialogTitle>
          </DialogHeader>
          <div className="flex h-[300px] flex-col overflow-y-auto rounded-md border p-4">
            <div className="mb-4 flex">
              <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <MessageSquare className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">Hello! I'm your assistant. Ask me anything.</p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button size="sm" className="absolute right-1 top-1">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}  