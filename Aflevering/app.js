const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/server-time', (req, res) => {
  const now = new Date();
  res.json({
    iso: now.toISOString(),
    epoch: now.getTime(),
    locale: now.toLocaleString('en-GB', { timeZone: 'Europe/Copenhagen' }),
    timezone: 'Europe/Copenhagen'
  });
});

app.get('/health', (req, res) => res.send('OK'));


app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Time Playground running on port ${PORT}`);
});