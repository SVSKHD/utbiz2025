"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

interface DailyProfit {
  value: number;
  trades: number;
}

interface DailyProfits {
  [date: string]: DailyProfit;
}

export function useDailyProfits(broker: string) {
  const [profits, setProfits] = useState<DailyProfits>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockData: DailyProfits = {
      // Current Month Data
      [format(new Date(), "yyyy-MM-01")]: { value: 25000, trades: 12 },
      [format(new Date(), "yyyy-MM-02")]: { value: 18500, trades: 8 },
      [format(new Date(), "yyyy-MM-03")]: { value: -12000, trades: 6 },
      [format(new Date(), "yyyy-MM-04")]: { value: 32000, trades: 15 },
      [format(new Date(), "yyyy-MM-05")]: { value: -8500, trades: 4 },
      [format(new Date(), "yyyy-MM-06")]: { value: 15000, trades: 7 },
      [format(new Date(), "yyyy-MM-07")]: { value: 28000, trades: 10 },
      [format(new Date(), "yyyy-MM-08")]: { value: -15000, trades: 5 },
      [format(new Date(), "yyyy-MM-09")]: { value: 22000, trades: 9 },
      [format(new Date(), "yyyy-MM-10")]: { value: 17500, trades: 8 },
      [format(new Date(), "yyyy-MM-11")]: { value: -9000, trades: 4 },
      [format(new Date(), "yyyy-MM-12")]: { value: 35000, trades: 14 },
      [format(new Date(), "yyyy-MM-13")]: { value: 19000, trades: 8 },
      [format(new Date(), "yyyy-MM-14")]: { value: -11000, trades: 5 },
      [format(new Date(), "yyyy-MM-15")]: { value: 24500, trades: 11 },
      [format(new Date(), "yyyy-MM-16")]: { value: 16000, trades: 7 },
      [format(new Date(), "yyyy-MM-17")]: { value: -7500, trades: 3 },
      [format(new Date(), "yyyy-MM-18")]: { value: 29000, trades: 13 },
      [format(new Date(), "yyyy-MM-19")]: { value: -13500, trades: 6 },
      [format(new Date(), "yyyy-MM-20")]: { value: 21000, trades: 9 },
    };

    // Simulate API call
    setTimeout(() => {
      setProfits(mockData);
      setIsLoading(false);
    }, 100);
  }, [broker]);

  return { profits, isLoading };
}