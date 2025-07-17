import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import reportsRouter from './routes/reports';
import feedbackRouter from './routes/feedback';
import requestTracker from './middleware/requestTracker';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // HTTP request logger
app.use(requestTracker); // Custom request tracker for latency and UUID

// API routes
app.use('/reports', reportsRouter);
app.use('/feedback', feedbackRouter);

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Perceive Now Report Viewer API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/`);
  console.log(`Reports API: http://localhost:${PORT}/reports`);
  console.log(`Feedback API: http://localhost:${PORT}/feedback`);
}); 