"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium leading-none">Notifications</h4>
            <Separator />
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="trade-alerts">Trade Alerts</Label>
              <Switch id="trade-alerts" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="price-alerts">Price Alerts</Label>
              <Switch id="price-alerts" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium leading-none">Trading</h4>
            <Separator />
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="confirm-trades">Confirm Trades</Label>
              <Switch id="confirm-trades" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="auto-close">Auto Close Positions</Label>
              <Switch id="auto-close" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="auto-trade">Auto Trade</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically execute trades based on signals
                </p>
              </div>
              <Switch id="auto-trade" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}