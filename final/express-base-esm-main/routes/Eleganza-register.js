import express from 'express';
import bodyParser from 'body-parser';
import db from '##/configs/mysql.js';
import 'dotenv/config.js';

const router = express.Router();

// 使用 body-parser 解析 POST 請求主體
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/raw-sql', async (req, res, next) => {
    const newUser = req.body;
    console.log(req.body);

    // 檢查是否有必要的資料
    if (!newUser.email || !newUser.phone || !newUser.password || !newUser.confirmPassword) {
        return res.status(400).json({ status: 'error', message: '缺少必要資料' });
    }

    if (newUser.password !== newUser.confirmPassword) {
        return res.status(400).json({ status: 'error', message: '密碼和確認密碼不匹配' });
    }

    try {
        // 檢查資料表中是否已存在相同的 email
        const [existingUsers] = await db.query('SELECT * FROM `users` WHERE `user_email` = ?', [newUser.email]);
        console.log(existingUsers);
        if (existingUsers.length > 0) {
            return res.status(400).json({ status: 'error', message: '此帳號已存在' });
        }

        // 如果資料表中不存在相同的 email，則創建新的使用者帳號
        const [createdUser] =  await db.query('INSERT INTO `users` (`user_email`, `user_phone`, `user_password`) VALUES (?, ?, ?)', 
            [newUser.email, newUser.phone, newUser.password]);
        console.log(createdUser);

        if (!createdUser.insertId) {
            // 若無法獲取新使用者的 insertId，表示創建使用者失敗
            throw new Error('Failed to create user');
        }

        return res.status(201).json({ status: 'success', data: null, message: '使用者帳號創建成功' });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ status: 'error', message: '伺服器錯誤，無法創建使用者帳號' });
    }
});

export default router;