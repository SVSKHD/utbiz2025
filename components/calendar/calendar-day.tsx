"use client";

import { format, isSameMonth } from "date-fns";
import { formatCurrency } from "@/lib/utils";

interface DayProfit {
  value: number;
  trades: number;
}

interface CalendarDayProps {
  day: Date | null;
  profit?: DayProfit;
  currentMonth: Date;
}

export function CalendarDay({ day, profit, currentMonth }: CalendarDayProps) {
  if (!day) {
    return <div className="bg-card p-2 min-h-[100px] border border-border/50" />;
  }

  const isCurrentMonth = isSameMonth(day, currentMonth);

  return (
    <div
      className={`bg-card p-2 min-h-[100px] border border-border/50 ${
        !isCurrentMonth ? "opacity-30" : ""
      } ${profit ? profit.value >= 0 ? "bg-green-500/20" : "bg-red-500/20" : ""}`}
    >
      <div className="flex flex-col h-full">
        <span className="text-sm text-muted-foreground">
          {format(day, "d")}
        </span>
        {profit && (
          <div className="mt-2 space-y-1">
            <p className={`text-base font-medium ${
              profit.value >= 0 ? "text-green-400" : "text-red-400"
            }`}>
              {formatCurrency(profit.value)}
            </p>
            <p className="text-xs text-muted-foreground/80">
              {profit.trades} trade{profit.trades !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}