"use client";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <h2 className={`text-lg font-semibold tracking-tight ${className}`}>
      {title}
    </h2>
  );
}