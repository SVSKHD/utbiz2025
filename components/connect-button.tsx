"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { useState } from "react";
import { ConnectDialog } from "./connect-dialog";

export function ConnectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => setOpen(true)}
      >
        <Link2 className="h-4 w-4" />
        Connect Broker
      </Button>
      <ConnectDialog open={open} onOpenChange={setOpen} />
    </>
  );
}