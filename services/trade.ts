import { Symbol } from '../models/symbol';
import { calculateThresholds } from '../utils/thresholds';
import { saveSymbolData, updateSymbolData, getSymbolData } from '../db';

interface TradeDecision {
  symbol: string;
  start_price: number;
  current_price: number;
  pip_difference: number;
  threshold_no: number | null;
  first_positive_threshold: boolean;
  first_negative_threshold: boolean;
  second_positive_threshold: boolean;
  second_negative_threshold: boolean;
  positive_hedging: boolean;
  negative_hedging: boolean;
  direction: string;
}

export async function decideTradeAndThresholds(
  symbol: Symbol,
  startPrice: number,
  currentPrice: number
): Promise<TradeDecision> {
  const thresholdData = await calculateThresholds(symbol, startPrice, currentPrice);
  
  const direction = thresholdData.direction;
  const thresholdNo = thresholdData.threshold_no;

  const firstPositiveThreshold = direction === 'positive' && thresholdNo !== null && Math.abs(thresholdNo) >= 1;
  const firstNegativeThreshold = direction === 'negative' && thresholdNo !== null && Math.abs(thresholdNo) >= 1;
  const secondPositiveThreshold = direction === 'positive' && thresholdNo !== null && Math.abs(thresholdNo) >= 2;
  const secondNegativeThreshold = direction === 'negative' && thresholdNo !== null && Math.abs(thresholdNo) >= 2;

  const data: TradeDecision = {
    symbol: symbol.symbol,
    start_price: startPrice,
    current_price: currentPrice,
    pip_difference: thresholdData.pip_difference,
    threshold_no: thresholdNo,
    first_positive_threshold: firstPositiveThreshold,
    first_negative_threshold: firstNegativeThreshold,
    second_positive_threshold: secondPositiveThreshold,
    second_negative_threshold: secondNegativeThreshold,
    positive_hedging: thresholdData.positive_hedging,
    negative_hedging: thresholdData.negative_hedging,
    direction
  };

  const symbolData = await getSymbolData(symbol.symbol);
  if (!symbolData) {
    await saveSymbolData(symbol.symbol, data);
  } else {
    await updateSymbolData(symbol.symbol, data);
  }

  return data;
}