# KickOff-Project
WEB Coding project 
פרויקט KickOff- פלטפורמה לניהול ותיאום משחקי כדורגל שכונתיים
אורי מיכאלי 211821889
אופיר טל 209707504
יונתן צור 211460795
| שיטת HTTP | כתובת API | תיאור ומה מוחזר |
מה מוחזר	כתובת API	שם הפונקציה של הcontroller	שיטת HTTP
מערך של כל המשחקים הפתוחים 	/api/matches	matchesController.getAllMatches	Get 
פרטי משחק ספציפי לפי מזהה	/api/matches/:id	matchesController.getMatchById	Get 
הודעת הצלחה על יצירת משחק 	/api/matches	matchesController.createMatch	Post  
הודעת הצלחה על עדכון משחק 	/api/matches/:id	matchesController.updateMatch	Put 
הודעת הצלחה על מחיקת משחק 	/api/matches/:id	matchesController.deleteMatch	Delete 
