const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const headlines = [
  (name, loc) => `Why ${name} is ${loc}'s Sweetest Spot in 2025`,
  (name, loc) => `Discover the Magic of ${name} in ${loc}!`,
  (name, loc) => `${name}: The Best Choice for ${loc} Locals`,
  (name, loc) => `Top Reasons ${name} is Loved in ${loc}`,
  (name, loc) => `Experience Excellence at ${name}, ${loc}`,
];

function getRandomHeadline(name, location) {
  const idx = Math.floor(Math.random() * headlines.length);
  return headlines[idx](name, location);
}

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Missing name or location' });
  }
  const rating = Number((Math.random() * 1.5 + 3.5).toFixed(1)); // 3.5 - 5.0
  const reviews = Math.floor(Math.random() * 200 + 20); // 20 - 220
  const headline = getRandomHeadline(name, location);

  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Missing name or location' });
  }
  const headline = getRandomHeadline(name, location);
  res.json({ headline });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));