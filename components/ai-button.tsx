"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AiAssistantDialog } from "./ai-assistant-dialog";

export function AiButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => setOpen(true)}
          >
            <Brain className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={4}>
          <p>AI Trading Assistant</p>
        </TooltipContent>
      </Tooltip>
      <AiAssistantDialog open={open} onOpenChange={setOpen} />
    </>
  );
}