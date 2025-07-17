import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

/**
 * Middleware that tracks request latency and adds a UUID trace header
 */
export const requestTracker = (req: Request, res: Response, next: NextFunction) => {
  // Generate a unique trace ID for this request
  const traceId = uuidv4();
  
  // Add trace ID to request headers
  req.headers['x-trace-id'] = traceId;
  
  // Record start time
  const startTime = Date.now();
  
  // Add response header with trace ID
  res.setHeader('X-Trace-ID', traceId);
  
  // Once the response is finished, calculate and log the latency
  res.on('finish', () => {
    const latency = Date.now() - startTime;
    
    console.log(JSON.stringify({
      traceId,
      path: req.path,
      method: req.method,
      statusCode: res.statusCode,
      latency: `${latency}ms`,
      timestamp: new Date().toISOString()
    }));
  });
  
  next();
};

export default requestTracker; 