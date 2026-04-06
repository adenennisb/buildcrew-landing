import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'waitlist.json');
const PORT = 3001;

const app = express();
app.use(express.json());

async function readWaitlist() {
  if (!existsSync(DATA_FILE)) return [];
  const raw = await readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

async function saveWaitlist(entries) {
  await writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
}

// POST /api/waitlist — save a new signup
app.post('/api/waitlist', async (req, res) => {
  const { name, email, phone, role, trade_type, company } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required.' });
  }

  const entries = await readWaitlist();
  const entry = {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: (phone || '').trim(),
    role,
    trade_type: (trade_type || '').trim(),
    company: (company || '').trim(),
  };

  entries.push(entry);
  await saveWaitlist(entries);

  console.log(`✅  New signup #${entries.length}: ${entry.name} <${entry.email}> — ${entry.role}${entry.trade_type ? ' / ' + entry.trade_type : ''}`);
  res.json({ success: true, total: entries.length });
});

// GET /api/waitlist — read all signups (for review)
app.get('/api/waitlist', async (req, res) => {
  const entries = await readWaitlist();
  res.json(entries);
});

app.listen(PORT, () => {
  console.log(`\nBuildCrew local server → http://localhost:${PORT}`);
  console.log(`Signups saved to      → ${DATA_FILE}\n`);
});
