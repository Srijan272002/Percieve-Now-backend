// Report types
export interface Report {
  id: string;
  title: string;
  reportType: ReportType;
  confidenceScore: number;
  industry: Industry;
  summary: string;
  createdAt: string;
  sources: Source[];
}

export enum ReportType {
  MARKET_ANALYSIS = 'Market Analysis',
  COMPANY_PROFILE = 'Company Profile',
  COMPETITIVE_ANALYSIS = 'Competitive Analysis',
  INVESTMENT_OPPORTUNITY = 'Investment Opportunity',
  RISK_ASSESSMENT = 'Risk Assessment',
  TREND_FORECAST = 'Trend Forecast',
}

export enum Industry {
  TECHNOLOGY = 'Technology',
  HEALTHCARE = 'Healthcare',
  FINANCE = 'Finance',
  RETAIL = 'Retail',
  MANUFACTURING = 'Manufacturing',
  ENERGY = 'Energy',
  EDUCATION = 'Education',
}

export interface Source {
  id: string;
  type: SourceType;
  title: string;
  description: string;
  reliability: number; // 0-100
  url?: string;
}

export enum SourceType {
  RESEARCH_PAPER = 'Research Paper',
  NEWS_ARTICLE = 'News Article',
  EXPERT_INTERVIEW = 'Expert Interview',
  FINANCIAL_REPORT = 'Financial Report',
  MARKET_DATA = 'Market Data',
  INTERNAL_ANALYSIS = 'Internal Analysis',
}

// Feedback types
export interface Feedback {
  id?: string;
  reportId: string;
  userComment: string;
  flaggedSection?: string;
  createdAt?: string;
}

// Request tracking
export interface RequestLog {
  id: string;
  path: string;
  method: string;
  timestamp: string;
  latency: number; // in ms
} 