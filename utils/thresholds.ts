import { Symbol } from '../models/symbol';
import { calculatePipDifference } from './price';
import { getOpenPositions } from './positions';

interface ThresholdResult {
  symbol: string;
  hedging: boolean;
  positive_hedging: boolean;
  negative_hedging: boolean;
  threshold_no: number | null;
  pip_difference: number;
  direction: 'positive' | 'negative' | 'neutral';
}

export async function calculateThresholds(
  symbol: Symbol,
  startPrice: number,
  currentPrice: number
): Promise<ThresholdResult> {
  const pipData = calculatePipDifference(symbol, startPrice, currentPrice);
  const pipDiff = pipData.pip_difference;

  if (pipDiff === 0) {
    return {
      symbol: symbol.symbol,
      hedging: false,
      positive_hedging: false,
      negative_hedging: false,
      threshold_no: null,
      pip_difference: pipDiff,
      direction: 'neutral'
    };
  }

  const thresholdNo = symbol.threshold !== 0 ? pipDiff / symbol.threshold : null;
  const direction = pipDiff < 0 ? 'positive' : pipDiff > 0 ? 'negative' : 'neutral';

  const openPositions = await getOpenPositions(symbol);

  let hedging = false;
  let positive_hedging = false;
  let negative_hedging = false;

  if (openPositions.no_of_positions === 2 && thresholdNo !== null) {
    if (0 <= thresholdNo && thresholdNo <= 0.5) {
      hedging = true;
      positive_hedging = true;
    } else if (-0.5 <= thresholdNo && thresholdNo < 0) {
      hedging = true;
      negative_hedging = true;
    }
  }

  return {
    symbol: symbol.symbol,
    hedging,
    positive_hedging,
    negative_hedging,
    threshold_no: thresholdNo !== null ? Number(thresholdNo.toFixed(2)) : null,
    pip_difference: pipDiff,
    direction
  };
}