import 'dotenv/config';
import express from 'express';
import eventsRouter from './routes/events.js';

const app = express();
app.use(express.json());

app.use ('/api/events', eventsRouter)

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));