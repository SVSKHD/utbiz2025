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
import { useMarketWatchData } from "@/hooks/use-market-watch";

interface MarketWatchListProps {
  search: string;
  page: number;
  itemsPerPage: number;
}

export function MarketWatchList({ search, page, itemsPerPage }: MarketWatchListProps) {
  const { data, isLoading } = useMarketWatchData();
  
  const filteredData = data?.filter(item => 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  ) || [];

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead className="text-right">LTP</TableHead>
            <TableHead className="text-right">Change</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.symbol}>
              <TableCell className="font-medium">{item.symbol}</TableCell>
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {}}
                  >
                    Sell
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {}}
                  >
                    Buy
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}