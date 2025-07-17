import express from 'express';
import mockReports from '../mockReports';
import { ReportType, Industry } from '../types';

const router = express.Router();

// Get all reports
router.get('/', (req, res) => {
  // Get query parameters for filtering
  const reportType = req.query.reportType as string;
  const industry = req.query.industry as string;
  const confidenceScoreMin = req.query.confidenceScoreMin ? 
    parseInt(req.query.confidenceScoreMin as string) : 0;
  const confidenceScoreMax = req.query.confidenceScoreMax ? 
    parseInt(req.query.confidenceScoreMax as string) : 100;

  // Apply filters if provided
  let filteredReports = [...mockReports];

  if (reportType) {
    filteredReports = filteredReports.filter(report => 
      report.reportType === reportType
    );
  }

  if (industry) {
    filteredReports = filteredReports.filter(report => 
      report.industry === industry
    );
  }

  // Filter by confidence score range
  filteredReports = filteredReports.filter(report => 
    report.confidenceScore >= confidenceScoreMin && 
    report.confidenceScore <= confidenceScoreMax
  );

  // Return the filtered reports
  res.json(filteredReports);
});

// Get a single report by ID
router.get('/:id', (req, res) => {
  const report = mockReports.find(r => r.id === req.params.id);
  
  if (!report) {
    return res.status(404).json({ error: 'Report not found' });
  }
  
  res.json(report);
});

// Get available report types
router.get('/types/all', (req, res) => {
  const types = Object.values(ReportType);
  res.json(types);
});

// Get available industries
router.get('/industries/all', (req, res) => {
  const industries = Object.values(Industry);
  res.json(industries);
});

export default router; 