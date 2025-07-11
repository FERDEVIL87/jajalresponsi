const { educationHistory } = require('../data');

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
    return;
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(educationHistory));
};
