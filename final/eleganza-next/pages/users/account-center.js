import React from 'react';
import Head from 'next/head'
import Tab from '@/component/users/tab'
import SideNav from '@/component/users/sidenav';


//元件的命名一定要英文開頭大寫，否則react會認為是一般的函式
export default function AccountCenter() {
   return (

   <>
      <Head>
        <title>Eleganza Studio</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      < Tab/>
      <div style={{ display: 'flex' }}>
         <SideNav />
        <main>
         <div className="mainarea">
         <div>
            <div>
               <p className="maintitle">帳號細節</p>
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
      </div>

      <style jsx>{`
      .mainarea{
            background-color: var(--color-text-light);
            border-radius: 8px;
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
            display: flex;
            width: 100%;
            padding: 20px;
            flex-direction: column;
            flex: 1 0 0;
            align-items: flex-start;
            gap: 32px;
            @media (max-width:1024px) {
               display: none;
            }
            
            .maintitle{
               font-size: var(--fs-h6);
               color: var(--color-secondary-dark);
               font-family:var(--font-noto-sans);
               font-style: normal;
               font-weight: 400;
               line-height: normal;
            }
            .formdetail{
               display: flex;
               flex-direction: row;
               vertical-align:text-bottom;
               align-items: flex-start;
               gap: 40px;
               flex: 1 0 0;
            }
               .formkey{
                  color: var(--color-text-medium);
                  font-family:var(--font-noto-sansr);
                  font-size: var(--fs-p);
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  gap: 0.75rem;
               }
               .formvalue{
                  color: var(--color-text-medium);
                  font-family:var(--font-inter);
                  font-size: var(--fs-p);
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  gap: 0.4rem;
                  /* margin-top: 0.7rem; */
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
               }
               .formstyle{
                  color: var(--color-text-medium);
                  font-family:var(--font-inter);
                  font-size: var(--fs-p);
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  border: 0.5px solid var(--color-primary-medium);
                  border-radius: 8px;
                  display: flex;
                  padding: 8px;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                  gap: 10px;
                  align-self: stretch;
                  & :hover{
                     border: var(--color-accent-medium);
                  & :focus{
                     border: var(--color-primary-dark);
                     box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
                     color: var(--color-text-dark);
   
                     }

                  }
               }
               .xsbtn {
                  background-color: var(--color-secondary-dark);
                  border-radius: 4px;
                  display: flex;
                  height: 27px;
                  padding: 4px 12px;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  cursor: pointer; /* 添加指针样式，表明可点击 */
               }

               .xsbtn a {
                  text-decoration: none;
                  color: var(--color-text-light);
                  font-family: var(--font-noto-sans);
                  font-size: var(--fs-hint);
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
               }

               .xsbtn:hover {
                  background-color: var(--color-secondary-medium);
               }

               .xsbtn:hover a {
                  /* 可选：悬停在按钮上时链接的样式 */
                  /* color: 新的链接颜色 */
               }
         }
         `}</style>
    </>
   
   );
}