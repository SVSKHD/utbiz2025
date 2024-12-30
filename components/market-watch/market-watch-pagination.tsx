"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MarketWatchPaginationProps {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

export function MarketWatchPagination({
  page,
  setPage,
  itemsPerPage,
  totalItems,
}: MarketWatchPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => setPage(pageNumber)}
              isActive={page === pageNumber}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}