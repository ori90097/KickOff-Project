# KickOff-Project
WEB Coding project 
פרויקט KickOff- פלטפורמה לניהול ותיאום משחקי כדורגל שכונתיים
אורי מיכאלי 211821889
אופיר טל 209707504
יונתן צור 211460795
### טבלת API - ישות משחקים (Matches)

| מה מוחזר | כתובת API | שם הפונקציה של ה-Controller | שיטת HTTP |
| :--- | :--- | :--- | :--- |
| מערך של כל המשחקים הפתוחים | `/api/matches` | `matchesController.getAllMatches` | GET |
| פרטי משחק ספציפי לפי מזהה | `/api/matches/:id` | `matchesController.getMatchById` | GET |
| הודעת הצלחה על יצירת משחק | `/api/matches` | `matchesController.createMatch` | POST |
| הודעת הצלחה על עדכון משחק | `/api/matches/:id` | `matchesController.updateMatch` | PUT |
| הודעת הצלחה על מחיקת משחק | `/api/matches/:id` | `matchesController.deleteMatch` | DELETE |

### טבלת API - ישות מגרשים (Pitches)

| מה מוחזר | כתובת API | שם הפונקציה של ה-Controller | שיטת HTTP |
| :--- | :--- | :--- | :--- |
| מערך של כל המגרשים | `/api/pitches` | `pitchesController.getAllPitches` | GET |
| פרטי מגרש ספציפי לפי מזהה | `/api/pitches/:id` | `pitchesController.getPitchById` | GET |
| הודעת הצלחה על יצירת מגרש | `/api/pitches` | `pitchesController.createPitch` | POST |
| הודעת הצלחה על עדכון מגרש | `/api/pitches/:id` | `pitchesController.updatePitch` | PUT |
| הודעת הצלחה על מחיקת מגרש | `/api/pitches/:id` | `pitchesController.deletePitch` | DELETE |
