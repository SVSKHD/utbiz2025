"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarGrid } from "./calendar-grid";
import { useDailyProfits } from "@/hooks/use-daily-profits";

interface CalendarViewProps {
  broker: string;
}

export function CalendarView({ broker }: CalendarViewProps) {
  const { profits, isLoading } = useDailyProfits(broker);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <CalendarGrid profits={profits} />
    </div>
  );
}