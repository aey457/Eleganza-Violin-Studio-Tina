import React from 'react';
import Head from 'next/head'
import styles from './account-center.module.css';
import UserLayout from '@/component/users/user-layout';

export default function AccountCenter() {
   return (

   <>
      <Head>
        <title>Eleganza Studio</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
        <main>
         <div className={styles['mainarea']}>
         <div>
            <div>
               <p className={styles.maintitle} >帳號細節</p>
               <div className="formdetail">
               <div className="formkey">
                  <p>帳號名稱</p>
                  <p>手機號碼</p>
               </div>
               <div className="formvalue">
                  <p>Fanny456@gmail.com</p>
                  <p>0987987452</p>
               </div>
               </div>
            </div>
            <div>
               <p className="maintitle">個人檔案</p>
               <div className="formdetail">
               <div className="formkey">
                  <p>姓名</p>
                  <p>手機號碼</p>
                  <p>顯示名稱</p>
               </div>
               <div className="formvalue">
               <input className="formstyle" type="text" defaultValue="王貫中" />
               <input className="formstyle" type="text" defaultValue="0987987452" /> {/* 將數字轉換為字串 */}
               <input className="formstyle" type="text" defaultValue="Fanny456" />
               </div>
               </div>
            </div>
            <div>
               <p className="maintitle">變更密碼</p>
               <div className="formdetail">
               <div className="formkey">
                  <p>舊密碼</p>
                  <p>新密碼</p>
                  <p>密碼確認</p>
               </div>
               <div className="formvalue">
                  <input className="formstyle" type="password" defaultValue="" />
                  <input className="formstyle" type="password" defaultValue="" />
                  <input className="formstyle" type="password" defaultValue="" />
                  <div className="xsbtn">
                     <a href="">儲存</a>
                  </div>
               </div>
               </div>
            </div>
         </div>
         </div>
      
      </main>
      
    </>
   
   );
}

AccountCenter.getLayout = function (page) {
   return <UserLayout>{page}</UserLayout>;
};