"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, format, isSameMonth } from "date-fns";
import { CalendarHeader } from "./calendar-header";
import { CalendarDay } from "./calendar-day";
import { MonthlySummary } from "./monthly-summary";

interface DailyProfit {
  value: number;
  trades: number;
}

interface CalendarGridProps {
  profits: Record<string, DailyProfit>;
}

export function CalendarGrid({ profits }: CalendarGridProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const startingDayOfWeek = startOfMonth(currentMonth).getDay();
  const daysInPreviousMonth = Array(startingDayOfWeek).fill(null);

  const monthlyStats = Object.entries(profits).reduce(
    (acc, [date, data]) => {
      const profitDate = new Date(date);
      if (isSameMonth(profitDate, currentMonth)) {
        if (data.value >= 0) {
          acc.totalProfit += data.value;
          acc.profitDays++;
        } else {
          acc.totalLoss += Math.abs(data.value);
          acc.lossDays++;
        }
        acc.totalTrades += data.trades;
      }
      return acc;
    },
    { totalProfit: 0, totalLoss: 0, profitDays: 0, lossDays: 0, totalTrades: 0 }
  );

  return (
    <div className="grid grid-cols-[300px_1fr] gap-4">
      <MonthlySummary stats={monthlyStats} />
      
      <Card className="p-4">
        <CalendarHeader
          currentMonth={currentMonth}
          onPreviousMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
          onNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
        />
        
        <div className="grid grid-cols-7 gap-px mt-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-muted-foreground bg-muted"
            >
              {day}
            </div>
          ))}

          {[...daysInPreviousMonth, ...days].map((day, index) => {
            const dateStr = day ? format(day, "yyyy-MM-dd") : "";
            const profit = dateStr ? profits[dateStr] : undefined;
            
            return (
              <CalendarDay
                key={dateStr || `empty-${index}`}
                day={day}
                profit={profit}
                currentMonth={currentMonth}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}