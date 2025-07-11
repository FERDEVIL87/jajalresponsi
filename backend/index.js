const { educationHistory, skills, projects } = require('./data');

// Serverless handler untuk Vercel
function handler(req, res) {
  // Pastikan method GET
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
    return;
  }

  // Routing sederhana
  if (req.url === '/api/education') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(educationHistory));
  } else if (req.url === '/api/skills') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(skills));
  } else if (req.url === '/api/projects') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projects));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
}

// Untuk Vercel: ekspor default
module.exports = handler;

// Untuk development lokal: jalankan Express jika bukan di serverless
if (require.main === module) {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  app.get('/api/education', (req, res) => res.json(educationHistory));
  app.get('/api/skills', (req, res) => res.json(skills));
  app.get('/api/projects', (req, res) => res.json(projects));

  app.listen(PORT, () => {
    console.log(` Server backend berjalan di http://localhost:${PORT}`);
  });
}