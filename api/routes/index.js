const express = require('express');

const Link = require.main.require('./models/Link');

const router = express.Router();

router.get('/:url', async ({ params: { url } }, res) => {
  try {
    const result = await Link.findOne({ where: { short: url }, attributes: ['full'] });
    if (!result) {
      return res.status(404).json('Link does not exist in database');
    }
    res.redirect(result.full);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
