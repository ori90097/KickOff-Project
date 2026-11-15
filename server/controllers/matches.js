const matches = [
  {
    id: 1,
    title: 'משחק 5 על 5 - ספורטק דרום',
    date: '12/11/2026',
    time: '20:00',
    location: 'ספורטק דרום, תל אביב',
    missingPlayers: 1,
    level: 'חובבנים'
  },
  {
    id: 2,
    title: 'קטרגל חמישי ערב',
    date: '12/11/2026',
    time: '21:30',
    location: 'מגרש נחלת יהודה, ראשון לציון',
    missingPlayers: 2,
    level: 'בינוני'
  }
];
exports.getAllMatches = (req, res) => {
  res.json(matches);
};
exports.getMatchById = (req, res) => {
  const matchId = parseInt(req.params.id);
  const match = matches.find(m => m.id === matchId);
  if (!match) {
    return res.status(404).json({ message: 'משחק לא נמצא' });
  }
  res.json(match);
};
exports.createMatch = (req, res) => {
    res.status(201).json({ message: 'משחק נוצר בהצלחה (דמי)' });
};
exports.updateMatch = (req, res) => {
  const matchId = parseInt(req.params.id);
  res.json({ message: `משחק מספר ${matchId} עודכן בהצלחה (דמי)` });
};
exports.deleteMatch = (req, res) => {
  const matchId = parseInt(req.params.id);
  res.json({ message: `משחק מספר ${matchId} נמחק בהצלחה (דמי)` });
};
