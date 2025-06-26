const express = require('express');
const router = express.Router();
const Event = require('./Event');

router.post('/save', async (req, res) => {
  const { userId, date, tasks } = req.body;
  try {
    const event = await Event.findOneAndUpdate(
      { userId, date },
      { tasks },
      { upsert: true, new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save' });
  }
});

router.get('/:userId', async (req, res) => {
  const events = await Event.find({ userId: req.params.userId });
  res.json(events);
});

module.exports = router;
