"use client";

import { ConnectDialog } from "@/components/connect-dialog";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Link2 } from "lucide-react";
import { useState } from "react";
import { UserMenu } from "@/components/user-menu";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConnectDialog, setShowConnectDialog] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="border-b border-border/40 bg-card">
      <div className="container mx-auto h-14 flex items-center justify-between px-4 max-w-5xl">
        <Logo />
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => setShowConnectDialog(true)}
              >
                <Link2 className="h-4 w-4" />
                Connect Broker
              </Button>
              <UserMenu onLogout={handleLogout} />
            </>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
          )}
        </div>
      </div>
      <ConnectDialog open={showConnectDialog} onOpenChange={setShowConnectDialog} />
    </header>
  );
}