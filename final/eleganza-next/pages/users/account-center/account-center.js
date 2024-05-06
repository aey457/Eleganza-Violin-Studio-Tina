import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head'
import styles from './account-center.module.css';
import UserLayout from '@/component/users/user-layout';

export default function AccountCenter({ userId=1 }) {
   const [userDetails, setUserDetails] = useState(null);
   
 
   useEffect(() => {
     // 向後端 API 端點發送請求獲取使用者資料
     fetch(`http://localhost:3005/api/home-myaccount/${userId}`)
       .then((response) => response.json())
       .then((data) => {
         setUserDetails(data.userDetails);
       })
       .catch((error) => console.error('Error fetching user details:', error));
   }, [userId]); // <-- Include userId in the dependency array
   
 
   return (
     <>
       <div className={styles['main']}>
         <div className={styles['mainarea-desktop']}>
         <div>
            <div>
               <p className={styles['maintitle']} >帳號細節</p>
               <div className={styles['formdetail']} >
               <div className={styles['formkey']} >
                  <p>帳號名稱</p>
                  <p>手機號碼</p>
               </div>
               <div className={styles['formvalue']} >
                  <p>{userDetails?.user_account}</p>
                  <p>0987987452</p>
               </div>
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
               <input className={styles['formstyle']} type="text" defaultValue="王貫中" />
               <input className={styles['formstyle']} type="text" defaultValue="0987987452" /> {/* 將數字轉換為字串 */}
               <input className={styles['formstyle']} type="text" defaultValue="Fanny456" />
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
                  <input className={styles['formstyle']} type="password" defaultValue="" />
                  <input className={styles['formstyle']} type="password" defaultValue="" />
                  <input className={styles['formstyle']} type="password" defaultValue="" />
                  <div className={styles['xsbtn']} >
                     <a href="">儲存</a>
                  </div>
               </div>
               </div>
            </div>
         </div>
         </div>
         
         <div className={styles['mainarea-mobile']} >
         <div>
            <div
               style={{
               marginBottom: 20,
               width: "100%",
               borderBottom: "0.5px solid var(--color-primary-medium)"
               }}
            >
               <p>Fanny456</p>
            </div>
            <p className={styles['maintitle']} >帳號細節</p>
            <div className={styles['formdetail']}>
               <div className={styles['formkey']}>
               <p>帳號名稱</p>
               <p>手機號碼</p>
               </div>
               <div className={styles['formvalue']}>
               <p>Fanny456@gmail.com</p>
               <p>0987987452</p>
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
               <input className={styles['formstyle']} type="text" defaultValue="王貫中" />
               <input className={styles['formstyle']} type="text" defaultValue="0987987452" />
               <input className={styles['formstyle']} type="text" defaultValue="Fanny456" />
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
               <input className={styles['formstyle']} type="password" defaultValue="" />
               <input className={styles['formstyle']} type="password" defaultValue="" />
               <input className={styles['formstyle']} type="password" defaultValue="" />
               </div>
            </div>
         </div>
         <div className={styles['xsbtn']}>
            <a href="">儲存</a>
         </div>
         </div>
         </div>
     </>
   );
 }

AccountCenter.getLayout = function (page) {
return <UserLayout currentPage="我的帳號">{page}</UserLayout>;}