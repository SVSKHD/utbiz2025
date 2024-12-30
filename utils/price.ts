import { Symbol } from '../models/symbol';

export function calculatePipDifference(
  symbol: Symbol, 
  startPrice: number, 
  currentPrice: number
): { symbol: string; pip_difference: number } {
  const pipDiff = startPrice - currentPrice;
  const formattedPipDifference = pipDiff / symbol.pip_size;

  const roundedPipDifference = Number(formattedPipDifference.toFixed(2));
  return {
    symbol: symbol.symbol,
    pip_difference: Math.abs(roundedPipDifference - Math.round(roundedPipDifference)) < 0.01 
      ? Math.round(roundedPipDifference)
      : roundedPipDifference
  };
}