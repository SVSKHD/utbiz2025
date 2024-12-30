"use client";

import { useState, useEffect } from "react";

interface MarketWatchItem {
  symbol: string;
  ltp: number;
  change: number;
  volume: number;
}

export function useMarketWatchData() {
  const [data, setData] = useState<MarketWatchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is mock data - replace with actual API call
    const mockData: MarketWatchItem[] = [
      { symbol: "RELIANCE", ltp: 2475.30, change: 1.2, volume: 5234567 },
      { symbol: "HDFCBANK", ltp: 1665.80, change: -0.8, volume: 3456789 },
      { symbol: "TCS", ltp: 3456.90, change: 0.5, volume: 1234567 },
      { symbol: "INFY", ltp: 1543.20, change: -1.2, volume: 2345678 },
      { symbol: "ICICIBANK", ltp: 945.75, change: 0.3, volume: 4567890 },
      { symbol: "SBIN", ltp: 576.45, change: -0.5, volume: 3789012 },
      { symbol: "BHARTIARTL", ltp: 867.30, change: 1.1, volume: 2345678 },
      { symbol: "HINDUNILVR", ltp: 2456.90, change: -0.2, volume: 1234567 },
      { symbol: "ITC", ltp: 434.55, change: 0.8, volume: 5678901 },
      { symbol: "KOTAKBANK", ltp: 1876.25, change: -0.4, volume: 2345678 }
    ];

    setData(mockData);
    setIsLoading(false);
  }, []);

  return { data, isLoading };
}