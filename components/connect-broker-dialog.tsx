"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const brokers = [
  { id: "zerodha", name: "Zerodha", fields: ["API Key", "API Secret"] },
  { id: "fyers", name: "Fyers", fields: ["App ID", "Access Token"] },
  { id: "dhan", name: "Dhan", fields: ["Client ID", "Auth Token"] },
];

export function ConnectBrokerDialog() {
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    setSelectedBroker(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Connect Broker</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Trading Account</DialogTitle>
        </DialogHeader>
        {!selectedBroker ? (
          <div className="grid grid-cols-1 gap-4 pt-4">
            {brokers.map((broker) => (
              <Button
                key={broker.id}
                variant="outline"
                className="justify-start"
                onClick={() => setSelectedBroker(broker.id)}
              >
                {broker.name}
              </Button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleConnect} className="space-y-4 pt-4">
            {brokers
              .find((b) => b.id === selectedBroker)
              ?.fields.map((field) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field.toLowerCase().replace(" ", "-")}>
                    {field}
                  </Label>
                  <Input
                    id={field.toLowerCase().replace(" ", "-")}
                    required
                  />
                </div>
              ))}
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedBroker(null)}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Connect
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}