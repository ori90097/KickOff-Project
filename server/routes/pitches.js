const express = require('express');
const router = express.Router();


const pitches = [
  {
    id: 1,
    name: 'ספורטק דרום',
    city: 'תל אביב',
    amenities: ['דשא סינתטי', 'תאורת לילה', 'חניה חינם']
  },
  {
    id: 2,
    name: 'מגרש נחלת יהודה',
    city: 'ראשון לציון',
    amenities: ['אספלט / קטרגל', 'תאורת לילה']
  }
];


router.get('/', (req, res) => {
  res.json(pitches);
});


router.get('/:id', (req, res) => {
  const pitchId = parseInt(req.params.id);
  const pitch = pitches.find(p => p.id === pitchId);
  if (!pitch) {
    return res.status(404).json({ message: 'מגרש לא נמצא' });
  }
  res.json(pitch);
});

module.exports = router;
