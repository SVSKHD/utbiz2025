"use client";

import { Wallet, TrendingUp, IndianRupee } from "lucide-react";
import { StatsCard } from "./stats-card";
import { PortfolioChart } from "./portfolio-chart";
import { PositionsCard } from "./positions-card";
import { MarketWatchTable } from "../market-watch/market-watch-table";
import { BalanceCard } from "./balance-card";
import { SectionHeader } from "@/components/ui/section-header";

interface BrokerTabProps {
  totalValue: number;
  todaysPnL: number;
  holdings: number;
  funds: number;
}

export function BrokerTab({ totalValue, todaysPnL, holdings, funds }: BrokerTabProps) {
  const pnlPercentage = (todaysPnL / totalValue) * 100;

  return (
    <div className="space-y-6">
      <BalanceCard balance={totalValue} change={pnlPercentage} />
      
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Total Value"
          value={totalValue}
          icon={<IndianRupee className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Today's P&L"
          value={todaysPnL}
          change={pnlPercentage}
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Available Funds"
          value={funds}
          icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div>
        <SectionHeader title="Market Watch" className="mb-4" />
        <MarketWatchTable />
      </div>

      <div>
        <SectionHeader title="Portfolio Overview" className="mb-4" />
        <div className="grid gap-6 md:grid-cols-2">
          <PortfolioChart />
          <PositionsCard positions={[]} />
        </div>
      </div>
    </div>
  );
}