import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head';
import styles from './account-center.module.css';
import UserLayout from '@/component/users/user-layout';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';

export default function AccountCenter() {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();
  const [user, setUser] = useState({
    useremail: '',
    password: '',
    phone: '',
    name: '',
    account: '',
    newPassword: '',
    newPasswordConfirm: '',
  });
  const [errors, setErrors] = useState({
    useremail: '',
    password: '',
    phone: '',
    name: '',
    account: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const { userId } = router.query; // 從 URL 參數中獲取用戶 ID
    if (userId) {
      // 向後端 API 端點發送請求獲取使用者資料
      fetch(`http://localhost:3005/api/home-myaccount/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data.userDetails);
        })
        .catch((error) => console.error('Error fetching user details:', error));
    }
  }, [router.query.userId]);

  const handleSave = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const { password, newPassword, newPasswordConfirm } = user;
    const newErrors = { password: '', newPassword: '', newPasswordConfirm: '' };

    if (password === newPassword) {
      newErrors.password = '舊密碼與新密碼不可一致';
      newErrors.newPassword = '舊密碼與新密碼不可一致';
      hasErrors = true;
    }

    if (newPassword !== newPasswordConfirm) {
      newErrors.newPassword = '密碼與確認密碼需要一致';
      newErrors.newPasswordConfirm = '密碼與確認密碼需要一致';
      hasErrors = true;
    }

    if (!password) {
      newErrors.password = '*密碼為必填';
      hasErrors = true;
    }

    if (!newPasswordConfirm) {
      newErrors.newPasswordConfirm = '*確認密碼為必填';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) {
      return;
    }

    const updatedUserData = {
      user_name: userDetails.user_name,
      user_account: userDetails.user_account,
      user_phone: userDetails.user_phone,
      user_password: newPassword ? newPassword : userDetails.user_password, // 如果有新密碼就使用新密碼，否則使用舊密碼
    };

    fetch(`http://localhost:3005/api/home-myaccount/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Update success:', data);
        setUser((prevState) => ({
          ...prevState,
          password: '', // 清空舊密碼欄位
          newPassword: '', // 清空新密碼欄位
          newPasswordConfirm: '', // 清空確認密碼欄位
        }));
      })
      .catch((error) => console.error('Error updating user details:', error));
  };

  return (
    <>
      <div className={styles['main']}>
        <div className={styles['mainarea-desktop']}>
          <div>
            <form onSubmit={handleSave}>
              <p className={styles['maintitle']}>帳號細節</p>
              <div className={styles['formdetail']}>
                <div className={styles['formkey']}>
                  <p>帳號名稱</p>
                  <p>手機號碼</p>
                </div>
                <div className={styles['formvalue']}>
                  <p>{userDetails?.user_email}</p>
                  <p>{userDetails?.user_phone}</p>
                </div>
              </div>
              <div>
                <p className={styles['maintitle']}>個人檔案</p>
                <div className={styles['formdetail']}>
                  <div className={styles['formkey']}>
                    <p>姓名</p>
                    <p>手機號碼</p>
                    <p>顯示名稱</p>
                  </div>
                  <div className={styles['formvalue']}>
                    <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_name} name="name"
                      value={user.name} onChange={handleFieldChange} />
                    <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_phone} name="phone"
                      value={user.phone} onChange={handleFieldChange} />
                    <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_account} name="account"
                      value={user.account} onChange={handleFieldChange} />
                  </div>
                </div>
              </div>
              <div>
                <p className={styles['maintitle']}>變更密碼</p>
                <div className={styles['formdetail']}>
                  <div className={styles['formkey']}>
                    <p>舊密碼</p>
                    <p>新密碼</p>
                    <p>密碼確認</p>
                  </div>
                  <div className={styles['formvalue']}>
                    <input className={styles['formstyle']} type="password" placeholder="舊密碼" name="password"
                      value={user.password} onChange={handleFieldChange} />
                    <input className={styles['formstyle']} type="password" placeholder="不可與舊密碼相同" name="newPassword"
                      value={user.newPassword} onChange={handleFieldChange} />
                    <input className={styles['formstyle']} type="password" placeholder="確認新密碼" name="newPasswordConfirm"
                      value={user.newPasswordConfirm} onChange={handleFieldChange} />
                    <div className={styles['xsbtn']}>
                      <button type="submit">儲存</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles['mainarea-mobile']}>
          <form onSubmit={handleSave}>
            <div
              style={{
                marginBottom: 20,
                width: '100%',
                borderBottom: '0.5px solid var(--color-primary-medium)',
              }}
            >
              <p>{userDetails?.user_account}</p>
            </div>
            <p className={styles['maintitle']}>帳號細節</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>帳號名稱</p>
                <p>手機號碼</p>
              </div>
              <div className={styles['formvalue']}>
                <p>{userDetails?.user_email}</p>
                <p>{userDetails?.user_phone}</p>
              </div>
            </div>
            <p className={styles['maintitle']}>個人檔案</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>姓名</p>
                <p>手機號碼</p>
                <p>顯示名稱</p>
              </div>
              <div className={styles['formvalue']}>
                <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_name} name="name"
                  value={user.name} onChange={handleFieldChange} />
                <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_phone} name="phone"
                  value={user.phone} onChange={handleFieldChange} />
                <input className={styles['formstyle']} type="text" placeholder={userDetails?.user_account} name="account"
                  value={user.account} onChange={handleFieldChange} />
              </div>
            </div>
            <p className={styles['maintitle']}>變更密碼</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>舊密碼</p>
                <p>新密碼</p>
                <p>密碼確認</p>
              </div>
              <div className={styles['formvalue']}>
                <input className={styles['formstyle']} type="password" placeholder={userDetails?.user_password} name="password"
                  value={user.password} onChange={handleFieldChange} />
                <input className={styles['formstyle']} type="password" placeholder="新密碼" name="newPassword"
                  value={user.newPassword} onChange={handleFieldChange} />
                <input className={styles['formstyle']} type="password" placeholder="確認密碼" name="newPasswordConfirm"
                  value={user.newPasswordConfirm} onChange={handleFieldChange} />
              </div>
            </div>
            <div className={styles['xsbtn']} >
              <button type="submit">儲存</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

AccountCenter.getLayout = function (page) {
  return <UserLayout currentPage="我的帳號">{page}</UserLayout>;
};