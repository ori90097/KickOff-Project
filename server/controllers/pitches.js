const pitches = [
  {
    id: 1,
    name: 'ספורטק דרום',
    city: 'תל אביב',
    surfaceType: 'דשא סינתטי',
    pricePerHour: 150
  },
  {
    id: 2,
    name: 'מגרש נחלת יהודה',
    city: 'ראשון לציון',
    surfaceType: 'אספלט',
    pricePerHour: 0
  }
];
exports.getAllPitches = (req, res) => {
  res.json(pitches);
};
exports.getPitchById = (req, res) => {
  const pitchId = parseInt(req.params.id);
  const pitch = pitches.find(p => p.id === pitchId);
  if (!pitch) {
    return res.status(404).json({ message: 'מגרש לא נמצא' });
  }
  res.json(pitch);
};
exports.createPitch = (req, res) => {
  res.status(201).json({ message: 'מגרש נוצר בהצלחה (דמי)' });
};
exports.updatePitch = (req, res) => {
  const pitchId = parseInt(req.params.id);
  res.json({ message: `מגרש מספר ${pitchId} עודכן בהצלחה (דמי)` });
};
exports.deletePitch = (req, res) => {
  const pitchId = parseInt(req.params.id);
  res.json({ message: `מגרש מספר ${pitchId} נמחק בהצלחה (דמי)` });
};
