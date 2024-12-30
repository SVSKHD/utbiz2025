"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface MonthlyStats {
  totalProfit: number;
  totalLoss: number;
  profitDays: number;
  lossDays: number;
  totalTrades: number;
}

interface MonthlySummaryProps {
  stats: MonthlyStats;
}

export function MonthlySummary({ stats }: MonthlySummaryProps) {
  const netPnL = stats.totalProfit - stats.totalLoss;
  const winRate = ((stats.profitDays / (stats.profitDays + stats.lossDays)) * 100) || 0;
  
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-6">Monthly Summary</h3>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm">Total Profit</span>
            </div>
            <span className="text-sm font-medium text-green-500">
              {formatCurrency(stats.totalProfit)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-500" />
              <span className="text-sm">Total Loss</span>
            </div>
            <span className="text-sm font-medium text-red-500">
              {formatCurrency(stats.totalLoss)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span className="text-sm">Net P&L</span>
            </div>
            <span className={`text-sm font-medium ${netPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatCurrency(netPnL)}
            </span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Win Rate</span>
            <span className="font-medium">{winRate.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Profitable Days</span>
            <span className="font-medium text-green-500">{stats.profitDays}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Loss Days</span>
            <span className="font-medium text-red-500">{stats.lossDays}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Trades</span>
            <span className="font-medium">{stats.totalTrades}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}