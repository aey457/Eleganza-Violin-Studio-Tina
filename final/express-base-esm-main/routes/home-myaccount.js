import express from 'express';
const router = express.Router();
import db from '##/configs/mysql.js';
import 'dotenv/config.js';

router.get('/', async (req, res) => {
  const [users] = await db.query('SELECT * FROM `users`')

res.json({ users });
});

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId; // 從路徑參數中獲取 userId
    // 從資料庫中取得使用者資料
    const [rows] = await db.query('SELECT * FROM users WHERE user_id=? ', [userId]);
    // SQL 查詢中的 SELECT * FROM users WHERE user_id=? 是一個簡單的查詢語句，它從名為 users 的資料表中選擇了所有欄位的資料，並根據給定的 user_id 條件進行篩選。[userId] 是一個陣列，用於指定 SQL 查詢中的參數，這個參數會被替換到 SQL 查詢語句中的問號 ? 處。
    console.log(rows);


    // 回傳資料給前端
    res.json({ userDetails:rows[0] });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;







// import mysql from 'mysql2';
// import db from "../../configs/mysql.js";

// let user_id = 4; // 如果沒有內容，應該設為 0
// let data;

// (async () => {
//     data = await getData('SELECT * FROM `users` WHERE `user_id` = ?', [user_id])
//         .then(results => {
//             console.log(`results`);
//             console.log(results);
//             return results[0]; // 修正了變數拼寫
//         })
//         .catch(error => {
//             console.log(error);
//             return undefined;
//         });
//     console.log(data);
//     if(data){
//         //有資料要做的事情
//     }else{
//         //取不到資料要做的事情
//     }
// })();

// function getData(SQL, ary) {
//     return new Promise((resolve, reject) => {
//         db.execute(
//             SQL,
//             ary,
//             (error, results, fields) => {
//                 if (error) {
//                     reject(error);
//                     return false;
//                 }
//                 console.log(results); // 確認結果
//                 console.log(fields);  // 確認欄位
//                 resolve(results);
//             }
//         );
//     });
// }