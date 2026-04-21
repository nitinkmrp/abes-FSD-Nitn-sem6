import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dbConnect from './config/db.js';
import userRoutes from './routes/user.routes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();

// ── Middleware ──────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Serve frontend static files ─────────────────────
app.use(express.static(path.join(__dirname, '../frontend')));

// ── Database ────────────────────────────────────────
dbConnect();

// ── API Routes ──────────────────────────────────────
app.use('/api/users', userRoutes);

// ── Health check ────────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'UserBase API is running' });
});

// ── API 404 handler (only for /api/* routes) ────────
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: `API route ${req.originalUrl} not found` });
});

// ── Fallback: serve index.html for all other routes ─
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ── Global error handler ────────────────────────────
app.use(errorHandler);

// ── Start server ────────────────────────────────────
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`\n🚀  Server running at http://localhost:${PORT}`);
  console.log(`🌐  Frontend:      http://localhost:${PORT}`);
  console.log(`📋  Health check:  http://localhost:${PORT}/health\n`);
});