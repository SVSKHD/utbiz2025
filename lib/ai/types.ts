export interface AiQuery {
  query: string;
  context?: Record<string, unknown>;
}

export interface AiResponse {
  response: string;
  confidence: number;
  timestamp: string;
}