"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface AiAssistantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AiAssistantDialog({ open, onOpenChange }: AiAssistantDialogProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    // Handle query submission
    console.log("Query submitted:", query);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col items-center justify-center p-0">
        <DialogTitle className="sr-only">AI Trading Assistant</DialogTitle>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">
              <span className="text-foreground">Ut</span>
              <span className="text-primary">biz</span>
            </h1>
            <p className="text-xl text-muted-foreground">Trade Smartly</p>
          </div>
          <div className="w-full max-w-md">
            <div className="relative">
              <Input 
                placeholder="Ask anything about trading..."
                className="h-12 pr-12"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && query.trim()) {
                    handleSubmit();
                  }
                }}
              />
              {query.trim() && (
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10"
                  onClick={handleSubmit}
                >
                  <Send className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}