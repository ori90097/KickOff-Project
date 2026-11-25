const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const matchesRouter = require('./routes/matches');
const pitchesRouter = require('./routes/pitches');
app.use('/api/matches', matchesRouter);
app.use('/api/pitches', pitchesRouter);
app.get('/', (req, res) => {
  res.send('KickOff Server is up and running!');
});
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "הכתובת המבוקשת לא נמצאה בשרת"
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
