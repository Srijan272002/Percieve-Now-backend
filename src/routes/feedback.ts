import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Feedback } from '../types';

const router = express.Router();

// In-memory storage for feedback (would be a database in production)
const feedbackStore: Feedback[] = [];

// Submit feedback
router.post('/', (req, res) => {
  const { reportId, userComment, flaggedSection } = req.body;
  
  // Validate required fields
  if (!reportId) {
    return res.status(400).json({ error: 'reportId is required' });
  }
  
  if (!userComment) {
    return res.status(400).json({ error: 'userComment is required' });
  }
  
  // Create new feedback object
  const feedback: Feedback = {
    id: uuidv4(),
    reportId,
    userComment,
    flaggedSection,
    createdAt: new Date().toISOString()
  };
  
  // Store feedback
  feedbackStore.push(feedback);
  
  // Return the created feedback
  res.status(201).json(feedback);
});

// Get all feedback (for demonstration purposes)
router.get('/', (req, res) => {
  res.json(feedbackStore);
});

// Get feedback for a specific report
router.get('/report/:reportId', (req, res) => {
  const reportFeedback = feedbackStore.filter(
    feedback => feedback.reportId === req.params.reportId
  );
  
  res.json(reportFeedback);
});

export default router; 