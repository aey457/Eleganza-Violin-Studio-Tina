import React from 'react';
import Head from 'next/head'
import styles from './account-center.module.css';
import UserLayout from '@/component/users/user-layout';

export default function AccountCenter() {
   return (

   <>
      <Head>
        <title>Account Center</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
        <div>
         <div className={styles['mainarea']}>
         <div>
            <div>
               <p className={styles['maintitle']} >帳號細節</p>
               <div className={styles['formdetail']} >
               <div className={styles['formkey']} >
                  <p>帳號名稱</p>
                  <p>手機號碼</p>
               </div>
               <div className={styles['formvalue']} >
                  <p>Fanny456@gmail.com</p>
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
      
      </div>
      
    </>
   
   );
}

AccountCenter.getLayout = function (page) {
   return <UserLayout>{page}</UserLayout>;
};