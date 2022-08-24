const express = require('express');
const { nanoid } = require('nanoid');

const Link = require.main.require('./models/Link');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { dataValues } = await Link.create({
      full: req.body.fullLink,
      short: nanoid(7),
    });
    res.status(201).json({ ...dataValues, short: `${req.protocol}://${req.get('host')}/${dataValues.short}` });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:url', async ({ params: { url } }, res) => {
  try {
    const result = await Link.findOne({ where: { short: url }, attributes: ['full'] });
    if (!result) {
      return res.status(404).json('Link does not exist in database');
    }
    res.send(result.full);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
