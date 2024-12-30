"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Position {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
}

interface PositionsCardProps {
  positions: Position[];
}

export function PositionsCard({ positions }: PositionsCardProps) {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Open Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {positions.length === 0 ? (
            <p className="text-muted-foreground text-sm">No open positions</p>
          ) : (
            positions.map((position) => (
              <div
                key={position.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <div className="space-y-1">
                  <p className="font-medium">{position.symbol}</p>
                  <p className="text-sm text-muted-foreground">
                    {position.type} • {position.quantity} units
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <div className={`flex items-center justify-end text-sm ${
                    position.pnl >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {position.pnl >= 0 ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    ₹{Math.abs(position.pnl).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Entry: ₹{position.entryPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}