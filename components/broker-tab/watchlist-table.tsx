"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  ltp: number;
  start_price: number;
  change: number;
  volume: number;
  positions: number;
}

interface WatchlistTableProps {
  items: WatchlistItem[];
  onTrade: (symbol: string, type: 'BUY' | 'SELL') => void;
}

export function WatchlistTable({ items, onTrade }: WatchlistTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead className="text-right">Start Price</TableHead>
            <TableHead className="text-right">LTP</TableHead>
            <TableHead className="text-right">Change</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.symbol}>
              <TableCell className="font-medium">{item.symbol}</TableCell>
              <TableCell className="text-right">₹{item.start_price.toLocaleString()}</TableCell>
              <TableCell className="text-right">₹{item.ltp.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <span className={`flex items-center justify-end ${
                  item.change >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {item.change >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(item.change)}%
                </span>
              </TableCell>
              <TableCell className="text-right">{item.volume.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  {item.positions > 0 ? (
                    <>
                      <span className="text-sm text-muted-foreground mr-2">
                        {item.positions} position{item.positions > 1 ? 's' : ''}
                      </span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => onTrade(item.symbol, 'SELL')}
                      >
                        Close
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onTrade(item.symbol, 'SELL')}
                      >
                        Sell
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => onTrade(item.symbol, 'BUY')}
                      >
                        Buy
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}