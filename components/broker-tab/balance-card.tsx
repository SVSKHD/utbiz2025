"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface BalanceCardProps {
  balance: number;
  change: number;
}

export function BalanceCard({ balance, change }: BalanceCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card className="bg-primary">
      <CardContent className="p-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-primary-foreground/80">Today's Balance</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold text-primary-foreground">
              {formatCurrency(balance)}
            </h2>
            <span className={`text-sm font-medium ${isPositive ? 'text-green-100' : 'text-red-100'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}