const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// נתוני דוגמה בזיכרון השרת (Mock Data)
let matches = [
  {
    id: 1,
    title: 'משחק 5 על 5 - ספורטק דרום',
    date: '12/11/2026',
    time: '20:00',
    location: 'ספורטק דרום, תל אביב',
    surface: 'דשא סינתטי (כולל תאורה)',
    cost: 25,
    level: 'חובבנים',
    totalSlots: 10,
    players: ['דניאל כ. (מארגן)', 'עומר ש.', 'רון ל.', 'שגיב ב.', 'תומר א.', 'יובל מ.', 'אורי ק.', 'ניר ד.'],
    notes: 'נא להגיע עם חולצה לבנה ונעלי קט-רגל / פקקים'
  },
  {
    id: 2,
    title: 'קטרגל חמישי ערב',
    date: '12/11/2026',
    time: '21:30',
    location: 'מגרש נחלת יהודה, ראשון לציון',
    surface: 'אספלט / קטרגל (תאורת לילה)',
    cost: 20,
    level: 'בינוני',
    totalSlots: 10,
    players: ['יוסי כ.', 'אלון ד.', 'מתן ס.', 'גל ב.', 'עידו ר.', 'ליאור פ.', 'איתי ק.', 'נדב מ.'],
    notes: 'חולצה אדומה'
  }
];

const pitches = [
  {
    id: 1,
    name: 'ספורטק דרום',
    city: 'תל אביב',
    amenities: ['דשא סינתטי', 'תאורת לילה', 'חניה חינם', 'ברזיית מים']
  },
  {
    id: 2,
    name: 'מגרש נחלת יהודה',
    city: 'ראשון לציון',
    amenities: ['אספלט / קטרגל', 'תאורת לילה', 'חניה חינם']
  },
  {
    id: 3,
    name: 'ספורטק צפון',
    city: 'תל אביב',
    amenities: ['דשא סינתטי', 'ללא תאורה', 'ללא חניה']
  }
];

// 1. נתיב ראשי
app.get('/', (req, res) => {
  res.send('KickOff Server is up and running!');
});

// 2. קבלת כל המשחקים (GET /api/matches)
app.get('/api/matches', (req, res) => {
  res.json(matches);
});

// 3. קבלת פרטי משחק בודד לפי מזהה (GET /api/matches/:id)
app.get('/api/matches/:id', (req, res) => {
  const matchId = parseInt(req.params.id);
  const match = matches.find(m => m.id === matchId);
  if (!match) {
    return res.status(404).json({ message: 'משחק לא נמצא' });
  }
  res.json(match);
});

// 4. יצירת משחק חדש (POST /api/matches)
app.post('/api/matches', (req, res) => {
  const newMatch = {
    id: matches.length + 1,
    ...req.body,
    players: req.body.organizer ? [req.body.organizer] : ['מארגן']
  };
  matches.push(newMatch);
  res.status(201).json({ message: 'המשחק נוצר בהצלחה!', match: newMatch });
});

// 5. הצטרפות למשחק קיים (POST /api/matches/:id/join)
app.post('/api/matches/:id/join', (req, res) => {
  const matchId = parseInt(req.params.id);
  const match = matches.find(m => m.id === matchId);
  if (!match) {
    return res.status(404).json({ message: 'משחק לא נמצא' });
  }
  if (match.players.length >= match.totalSlots) {
    return res.status(400).json({ message: 'המשחק מלא, לא ניתן להצטרף' });
  }
  const playerName = req.body.playerName || 'שחקן חדש';
  match.players.push(playerName);
  res.json({ message: 'הצטרפת בהצלחה למשחק!', match });
});

// 6. קבלת מאגר המגרשים (GET /api/pitches)
app.get('/api/pitches', (req, res) => {
  res.json(pitches);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

