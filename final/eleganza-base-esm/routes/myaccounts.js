import express from 'express';
const router = express.Router();

//資料庫使用
import db from '#configs/mysql.js'

router.post('/raw-sql', async function (req, res, next) {
  try {
    console.log(req.body);

    const newUser = req.body;

    const [user, created] = await Myaccount.findOrCreate({
      where: { username: newUser.username, email: newUser.email },
      defaults: {
        name: newUser.name,
        password: newUser.password,
      },
    });

    //檢查資料表中有沒有此email或username
    const [rows] = await db.query(
        'SELECT * FROM users WHERE name=? OR email=?', 
        [newUser.name,newUser.email]
    )

    console.log(rows)

    if (rows.length > 0) {
        return res.json({ status: 'error', message: '會員帳號或Email重覆' })
    }

    // 新增失敗 created=false 代表沒新增
    if (!created) {
      return res.json({ status: 'error', message: '建立會員失敗' });
    }

    // 成功建立會員的回應
    return res.status(201).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

router.get('/', async function (req, res , next){
  try {
    // 從資料庫中擷取所有用戶資料
    const users = await Myaccount.findAll();

    // 回傳撈取到的資料
    return res.status(200).json({ status: 'success', data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

export default router;
