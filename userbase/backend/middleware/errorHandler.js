// Global error handling middleware (must have 4 params for Express to recognise it)
const errorHandler = (err, req, res, next) => {
  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ message: messages.join(', ') });
  }

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ message: `Duplicate value for field: ${field}` });
  }

  // Fix: fallback to 500 if err.status is undefined
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  res.status(status).json({ message });
};

export default errorHandler;
