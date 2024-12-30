"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MarketWatchList } from "./market-watch-list";
import { MarketWatchPagination } from "./market-watch-pagination";
import { Search } from "lucide-react";

export function MarketWatchTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search symbols..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      <MarketWatchList 
        search={search}
        page={page}
        itemsPerPage={itemsPerPage}
      />
      <MarketWatchPagination
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        totalItems={20} // This should come from your data
      />
    </div>
  );
}