import express from 'express';
const router = express.Router();
import db from '##/configs/mysql.js';
import 'dotenv/config.js';

router.get('/', async (req, res) => {
  let  sql =`
  SELECT course.*, teacher.t_name AS course_teacher_name FROM course		
  JOIN teacher ON course.teacher_id = teacher.teacher_id 
  ORDER BY course.course_id
  `
  const [lessons] = await db.query(sql)

res.json({ lessons });
});

router.get('/:lessonId', async (req, res) => {
  try {
    const lessonId = req.params.lessonId; 
    // 從資料庫中取得使用者資料
    let sql2 = `
    SELECT course.*, teacher.t_name AS course_teacher_name FROM course		
    JOIN teacher ON course.teacher_id = teacher.teacher_id 
    WHERE course_id=?
    ORDER BY course_id
    `
    const [rows] = await db.query(sql2, [lessonId]);
    console.log(rows);


    // 回傳資料給前端
    res.json({ lessonDetails:rows[0] });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/lessoncollection/:userId', async (req, res) => {
  const userId = req.params.userId;

  let sql = `
    SELECT 
      course.*, 
      teacher.t_name AS course_teacher_name,
      users.user_id AS user_id
    FROM 
      course_likes
    JOIN 
      course ON course_likes.course_id = course.course_id 
    JOIN 
      teacher ON course.teacher_id = teacher.teacher_id
    JOIN
      users ON course_likes.user_id = users.user_id 
    WHERE 
      course_likes.user_id = ?
    ORDER BY 
      course_likes.course_like_id;
  `;

  try {
    // 從 course_likes 資料表中獲取特定使用者的課程收藏數據
    const [collections] = await db.query(sql, [userId]);
    res.json({ collections });
  } catch (error) {
    console.error('獲取使用者課程收藏時發生錯誤:', error);
    res.status(500).json({ message: '伺服器錯誤' });
  }
});



export default router