const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

// Serverless handler
function handler(req, res) {
  if (req.url.startsWith('/api/education')) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(educationHistory));
  } else if (req.url.startsWith('/api/skills')) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(skills));
  } else if (req.url.startsWith('/api/projects')) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projects));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}

module.exports.handler = handler;

// Jalankan Express hanya jika bukan di serverless
if (require.main === module) {
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