import { Report, ReportType, Industry, SourceType } from './types';
import { v4 as uuidv4 } from 'uuid';

const mockReports: Report[] = [
  {
    id: uuidv4(),
    title: 'Tesla Market Position Analysis',
    reportType: ReportType.MARKET_ANALYSIS,
    confidenceScore: 87,
    industry: Industry.TECHNOLOGY,
    summary: 'Tesla continues to dominate the electric vehicle market with a 65% market share in the US. Their technological innovation and brand loyalty provide strong competitive advantages, though increasing competition from traditional automakers and new EV startups presents growing challenges.',
    createdAt: new Date(2025, 6, 10).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.MARKET_DATA,
        title: 'EV Market Share Q2 2025',
        description: 'Comprehensive market share analysis of electric vehicles in North America, Europe, and Asia.',
        reliability: 92,
        url: 'https://example.com/ev-market-q2-2025'
      },
      {
        id: uuidv4(),
        type: SourceType.FINANCIAL_REPORT,
        title: 'Tesla Q2 2025 Earnings Report',
        description: 'Official quarterly financial results showing revenue growth and profit margins.',
        reliability: 98,
        url: 'https://example.com/tesla-q2-2025'
      },
      {
        id: uuidv4(),
        type: SourceType.NEWS_ARTICLE,
        title: 'Tesla Announces New Battery Technology',
        description: 'Coverage of Tesla\'s latest battery technology announcement and its potential impact.',
        reliability: 75,
        url: 'https://example.com/tesla-battery-news'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Moderna Healthcare Innovation Profile',
    reportType: ReportType.COMPANY_PROFILE,
    confidenceScore: 92,
    industry: Industry.HEALTHCARE,
    summary: 'Moderna has leveraged its mRNA platform to expand beyond vaccines into therapeutic treatments for rare diseases and cancer. Their robust R&D pipeline and strategic partnerships position them for continued growth, though regulatory challenges and competition from established pharmaceutical companies remain significant factors.',
    createdAt: new Date(2025, 6, 12).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.RESEARCH_PAPER,
        title: 'Advances in mRNA Technology Applications',
        description: 'Peer-reviewed research on the expanding applications of mRNA technology in medicine.',
        reliability: 95,
        url: 'https://example.com/mrna-research'
      },
      {
        id: uuidv4(),
        type: SourceType.EXPERT_INTERVIEW,
        title: 'Interview with Dr. Sarah Chen, Biotech Analyst',
        description: 'Expert insights on Moderna\'s technology platform and market position.',
        reliability: 88,
        url: 'https://example.com/chen-interview'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'JP Morgan Chase Competitive Analysis',
    reportType: ReportType.COMPETITIVE_ANALYSIS,
    confidenceScore: 79,
    industry: Industry.FINANCE,
    summary: 'JP Morgan Chase maintains its leadership position in investment banking and wealth management, though fintech disruptors are eroding market share in retail banking. Their strategic investments in digital transformation and artificial intelligence are critical to maintaining competitive advantage.',
    createdAt: new Date(2025, 6, 5).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.FINANCIAL_REPORT,
        title: 'Banking Industry Competitive Landscape 2025',
        description: 'Analysis of market share and competitive positioning among top 10 US banks.',
        reliability: 85,
        url: 'https://example.com/banking-landscape'
      },
      {
        id: uuidv4(),
        type: SourceType.INTERNAL_ANALYSIS,
        title: 'Fintech Disruption Risk Assessment',
        description: 'Internal analysis of how fintech companies are challenging traditional banking models.',
        reliability: 78,
        url: 'https://example.com/fintech-disruption'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Renewable Energy Investment Opportunity',
    reportType: ReportType.INVESTMENT_OPPORTUNITY,
    confidenceScore: 83,
    industry: Industry.ENERGY,
    summary: 'The renewable energy sector presents significant investment opportunities, particularly in solar and energy storage. Policy support, decreasing costs, and increasing corporate commitments to carbon neutrality are driving market growth. Key players like NextEra Energy and Brookfield Renewable Partners show strong fundamentals and growth potential.',
    createdAt: new Date(2025, 6, 15).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.MARKET_DATA,
        title: 'Renewable Energy Growth Projections 2025-2030',
        description: 'Market forecasts for solar, wind, and energy storage technologies.',
        reliability: 82,
        url: 'https://example.com/renewable-projections'
      },
      {
        id: uuidv4(),
        type: SourceType.EXPERT_INTERVIEW,
        title: 'Interview with Energy Policy Expert',
        description: 'Discussion of regulatory trends and government incentives for renewable energy.',
        reliability: 90,
        url: 'https://example.com/energy-policy-interview'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Supply Chain Disruption Risk Assessment',
    reportType: ReportType.RISK_ASSESSMENT,
    confidenceScore: 71,
    industry: Industry.MANUFACTURING,
    summary: 'Global manufacturing supply chains face continued disruption risks from geopolitical tensions, climate events, and labor shortages. Companies with diversified supplier networks and investments in supply chain visibility technologies are better positioned to mitigate these risks.',
    createdAt: new Date(2025, 6, 8).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.RESEARCH_PAPER,
        title: 'Supply Chain Resilience in Volatile Markets',
        description: 'Academic research on supply chain risk factors and mitigation strategies.',
        reliability: 93,
        url: 'https://example.com/supply-chain-research'
      },
      {
        id: uuidv4(),
        type: SourceType.NEWS_ARTICLE,
        title: 'Semiconductor Shortage Impact on Manufacturing',
        description: 'Analysis of ongoing semiconductor supply constraints and industry impact.',
        reliability: 65,
        url: 'https://example.com/semiconductor-shortage'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'E-commerce Trend Forecast 2026',
    reportType: ReportType.TREND_FORECAST,
    confidenceScore: 76,
    industry: Industry.RETAIL,
    summary: 'E-commerce is projected to reach 30% of global retail sales by 2026, with social commerce and augmented reality shopping experiences driving significant growth. Mobile commerce will continue to dominate, accounting for over 70% of e-commerce transactions.',
    createdAt: new Date(2025, 6, 16).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.MARKET_DATA,
        title: 'Global E-commerce Statistics 2025',
        description: 'Comprehensive data on e-commerce adoption, growth rates, and consumer behavior.',
        reliability: 88,
        url: 'https://example.com/ecommerce-stats'
      },
      {
        id: uuidv4(),
        type: SourceType.INTERNAL_ANALYSIS,
        title: 'AR/VR in Retail: Adoption Trends',
        description: 'Analysis of augmented and virtual reality applications in retail experiences.',
        reliability: 72,
        url: 'https://example.com/ar-vr-retail'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'EdTech Market Analysis',
    reportType: ReportType.MARKET_ANALYSIS,
    confidenceScore: 81,
    industry: Industry.EDUCATION,
    summary: 'The educational technology market is experiencing rapid growth, driven by remote learning adoption and demand for personalized learning experiences. AI-powered tutoring platforms and virtual classroom solutions show the strongest growth potential.',
    createdAt: new Date(2025, 6, 11).toISOString(),
    sources: [
      {
        id: uuidv4(),
        type: SourceType.MARKET_DATA,
        title: 'EdTech Funding and Growth Metrics',
        description: 'Analysis of venture capital investment in educational technology startups.',
        reliability: 85,
        url: 'https://example.com/edtech-funding'
      },
      {
        id: uuidv4(),
        type: SourceType.EXPERT_INTERVIEW,
        title: 'Interview with Education Technology Specialist',
        description: 'Expert perspectives on emerging technologies and adoption barriers in education.',
        reliability: 90,
        url: 'https://example.com/edtech-expert'
      }
    ]
  }
];

export default mockReports; 