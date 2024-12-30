export interface Symbol {
  symbol: string;
  pip_size: number;
  threshold: number;
}

export const SYMBOLS = {
  EUR: { symbol: 'EURUSD', pip_size: 0.0001, threshold: 15 },
  XAG: { symbol: 'XAGUSD', pip_size: 0.01, threshold: 20 },
  XAU: { symbol: 'XAUUSD', pip_size: 0.01, threshold: 700 }
} as const;