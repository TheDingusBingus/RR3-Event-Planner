import 'dotenv/config';
import express from 'express';
import eventsRouter from './routes/events.js';
import reportsRouter from './routes/reports.js';

const app = express();
app.use(express.json());

app.use ('/api/events', eventsRouter)
app.use('/api/reports', reportsRouter);

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API: http://localhost:${PORT}`));