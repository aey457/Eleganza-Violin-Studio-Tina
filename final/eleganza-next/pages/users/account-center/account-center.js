import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head'
import styles from './account-center.module.css';
import SideNav from '@/component/users/sidenav';
import Breadcrumb from '@/component/users/breadcrumb';
import UserLayout from '@/component/users/user-layout';

export default function AccountCenter({ userId }) {
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
       <Breadcrumb currentPage="我的帳號" />
       <div className={styles['main']}>
         <SideNav />
         <div className={styles['mainarea-desktop']}>
           {userDetails && (
             <div>
               <div>
                 <p className={styles['maintitle']}>帳號細節</p>
                 <div className={styles['formdetail']}>
                   <div className={styles['formkey']}>
                     <p>帳號名稱</p>
                     <p>手機號碼</p>
                   </div>
                   <div className={styles['formvalue']}>
                     <p>{userDetails.user_email}</p>
                     <p>{userDetails.user_phone}</p>
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
                     <input className={styles['formstyle']} type="text" defaultValue={userDetails.user_name} />
                     <input className={styles['formstyle']} type="text" defaultValue={userDetails.user_phone} />
                     <input className={styles['formstyle']} type="text" defaultValue={userDetails.user_account} />
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
                     <input className={styles['formstyle']} type="password" defaultValue={userDetails.user_password} />
                     <input className={styles['formstyle']} type="password" defaultValue="" />
                     <input className={styles['formstyle']} type="password" defaultValue="" />
                     <div className={styles['xsbtn']}>
                     <button type="submit">儲存</button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
     </>
   );
 }

{/* // AccountCenter.getLayout = function (page) {
//    return <UserLayout>{page}</UserLayout>;
// }; */}