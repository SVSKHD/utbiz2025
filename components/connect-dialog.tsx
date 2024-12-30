"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BrokerConfig {
  id: string;
  name: string;
  fields: {
    id: string;
    label: string;
    type: string;
  }[];
}

const brokers: BrokerConfig[] = [
  {
    id: "zerodha",
    name: "Zerodha",
    fields: [
      { id: "user_id", label: "User ID", type: "text" },
      { id: "password", label: "Password", type: "password" },
      { id: "api_key", label: "API Key", type: "text" },
      { id: "api_secret", label: "API Secret", type: "password" },
    ],
  },
  {
    id: "fyers",
    name: "Fyers",
    fields: [
      { id: "client_id", label: "Client ID", type: "text" },
      { id: "password", label: "Password", type: "password" },
      { id: "api_key", label: "API Key", type: "text" },
      { id: "secret_key", label: "Secret Key", type: "password" },
    ],
  },
  {
    id: "dhan",
    name: "Dhan",
    fields: [
      { id: "user_id", label: "User ID", type: "text" },
      { id: "password", label: "Password", type: "password" },
      { id: "api_key", label: "API Key", type: "text" },
      { id: "secret", label: "Secret", type: "password" },
    ],
  },
];

export function ConnectDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selectedBroker, setSelectedBroker] = useState("zerodha");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Trading Account</DialogTitle>
        </DialogHeader>
        <Tabs value={selectedBroker} onValueChange={setSelectedBroker}>
          <TabsList className="grid w-full grid-cols-3 h-9">
            {brokers.map((broker) => (
              <TabsTrigger key={broker.id} value={broker.id}>
                {broker.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {brokers.map((broker) => (
            <TabsContent key={broker.id} value={broker.id}>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                {broker.fields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={`${broker.id}-${field.id}`}>
                      {field.label}
                    </Label>
                    <Input
                      id={`${broker.id}-${field.id}`}
                      type={field.type}
                      required
                    />
                  </div>
                ))}
                <Button type="submit" className="w-full">
                  Connect
                </Button>
              </form>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}