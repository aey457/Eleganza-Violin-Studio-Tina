<!doctype html>
<html lang="en">

<head>
   <title>Title</title>
   <!-- Required meta tags -->
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

   <!-- Bootstrap CSS v5.2.1 -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
      rel="stylesheet">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
   <link rel="stylesheet" href="EleganzaStyle.css">
   <style>
      :root{
         a:hover{
            color: var(--color-primary-dark);
         }
      }
      .overlaybg {
         position: fixed;
         top: 0;
         left: 0;
         width: 100vw; /* 寬度佔滿整個瀏覽器 */
         height: 100vh; /* 高度佔滿整個瀏覽器 */
         display: flex;
         justify-content: flex-end; /* 水平居中 */
         align-items: center; /* 垂直居中 */
         gap: 10px;
         background: rgba(130, 130, 130, 0.50);
         z-index: 9999;
         @media (max-width:1024px) {
            z-index: 1;
         } 
      }
      .popupwindow{
         display: flex;
         width: 380px;
         padding: 20px 20px 0px 20px;
         flex-direction: column;
         align-items: flex-end;
         gap: 100px;
         flex-shrink: 0;
         align-self: stretch;
         background: var(--color-text-light);
         box-shadow: -50px 0px 50px -50px rgba(0, 0, 0, 0.25);
         & img{
            width: 24px;
            height: 24px;
         }
         @media (max-width:1024px) {
            width: 100%;
            height: 100vh;
            align-items: flex-end;
            align-self: stretch;
            padding: 20px 20px;
         }
      }
      
      .formwrap{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 24px;
         align-self: stretch;
      }
      .formwrap-s{
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 20px;
         align-self: stretch;
         width: 100%; /* 讓父容器佔滿可用的寬度 */
      }
      .logo{
         color: var(--color-text-dark);
            font-family: var(--font-playfair);
            font-size: 68px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            user-select: none;
            justify-content: center;

            & a {
               text-decoration: none;
               color: inherit;
            }
      }
      .form{
         width: 100%;
      }
      .formkey{
         color: var(--color-secondary-dark);
         font-family: var(--font-inter);
         font-size: var(--fs-hint);
         font-style: normal;
         font-weight: 400;
         line-height: normal;
         margin: 4px 0;
      }
      .formvalue{
         width: 100%;
         display: flex;
         height: 40px;
         padding: 8px;
         align-items: center;
         gap: 10px;
         align-self: stretch;
         border-radius: 8px;
         border: 1px solid var(--color-primary-medium);
         box-sizing: border-box; /* 確保 padding 不會影響寬度 */
      }
      /* 以下一樣沒效，有空去複習HTML5那時候好像有講到眼睛的接法 */
      .formvalue::placeholder {
         /* 使用 base64 编码的图标 */
         background-image: url(./icons/icon-eye.svg);
         /* 调整图标位置，这里根据需要进行调整 */
         background-position: right center;
         /* 保证图标不会重复显示 */
         background-repeat: no-repeat;
         /* 调整图标与文本之间的间距 */
         padding-right: 20px;
      }
      .formcheck{
         display: flex;
         align-items: flex-start;
         gap: 10px;
         align-self: stretch;
         & .checkloginstatus{
            display: flex;
            align-items: center;
            gap: 4px;
            flex: 1 0 0;
         }
         & p{
            color: var(--color-text-medium);
            font-family: var(--font-noto-sans);
            font-size: var(--fs-hint);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 0;
         }
         & a{
            text-decoration: none;
            color: var(--color-text-medium);
            font-family: var(--font-noto-sans);
            font-size: var(--fs-hint);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 0;
         }
      }
      .mbtn {
                  background-color: var(--color-secondary-dark);
                  border-radius: 6px;
                  display: flex;
                  padding: 12px 32px;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  align-self: stretch;
                  cursor: pointer; /* 添加指针样式，表明可点击 */
               }

      .mbtn a {
                  text-decoration: none;
                  color: var(--color-text-light);
                  font-family: var(--font-noto-sans);
                  font-size: var(--fs-p);
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
               }

      .mbtn:hover {
                  background-color: var(--color-secondary-medium);
                  color: var(--color-text-light);
               }
      .registeraccount{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         align-self: stretch;
         & a{
            text-decoration: none;
            color: var(--color-text-medium);
            font-family: var(--font-noto-sans);
            font-size: var(--fs-hint);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 0;
         }
      }
   
         
    
   </style>
</head>

<body class="d-flex flex-column">
   <!-- header -->
   <header>
      <div class="header-container fixed-top">
         <div class="logo">
            <a href="">ELEGANZA</a>
         </div>
         <ul class="d-flex justify-content-between align-content-center list-unstyled m-0">
            <li class="link"><a href="">關於阿爾扎</a></li>
            <li class="link"><a href="">商品總覽</a></li>
            <li class="link"><a href="">精選課程</a></li>
            <li class="link"><a href="">師資陣容</a></li>
            <li class="link"><a href="">弦樂專欄</a></li>
         </ul>
         <div class="header-icons d-flex align-items-center justify-content-between">
            <a href=""><img class="cart" src="./icons/icon-cart-white.svg" /></a>
            <a href=""><img class="account" src="./icons/icon-user-white.svg" /></a>
            <a href=""><img class="menu" src="./icons/icon-menu-white.svg" /></a>
         </div>
      </div>
   </header>

   <!-- main -->
   <main class="wrap flex-grow-1">
      <!-- ------------------頁面內容------------------------ -->
      <div class="overlaybg">
         <div class="popupwindow">
            <a href="">
               <img src="./icons/icon-x.svg" alt="">
            </a>
            <div class="formwrap">
               <div class="logo"> <a href="">ELEGANZA</a></div>
               <div class="formwrap-s">
                  <div class="form">
                     <p class="formkey">Email</p>
                     <input class="formvalue" type="text">
                  </div>
                  <div class="form">
                     <p class="formkey">密碼</p>
                     <input class="formvalue" type="password">   
                  </div>
                  <div class="formcheck">
                     <div class="checkloginstatus">
                        <input type="checkbox">
                         <p>保持登入狀態</p>
                     </div>
                     <a href="">忘記密碼？</a>
                  </div>
                  <div class="mbtn"><a href="">登入</a></div>
               </div>
               <div class="registeraccount">
                  <a href="">註冊帳號</a>
               </div>
            </div>
         </div>
      </div>
     



   </main>

   <!-- footer -->
   <footer>
      <div class="footer-container">
         <div class="row justify-content-between">
            <div class="info col-xl-4">
               <div class="logo">ELEGANZA</div>
               <p>Eleganza Violin Studio 是一家提供小提琴及其配件產品、小提琴課程、音樂會場地和日常練習場地，以及音樂推廣講座的小提琴音樂工作室。 </p>
               <hr class="d-block d-xl-none">
            </div>
            <div class="links row col-xl-7 justify-content-between">
               <div class="col">
                  <div class="row justify-content-between">
                     <div class="link col-sm mb-2">
                        <span class="title">產品販售</span>
                        <span><a href="">小提琴</a></span>
                        <span><a href="">琴盒/弓</a></span>
                        <span><a href="">配件</a></span>
                     </div>
                     <div class="link col-sm  mb-2">
                        <span class="title">小提琴課程</span>
                        <span><a href="">各級個別課</a></span>
                        <span><a href="">團體課</a></span>
                        <span><a href="">大師班</a></span>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="row justify-content-between">
                     <div class="link col-sm  mb-2">
                        <span class="title">聯繫方式</span>
                        <span>
                           <img src="./icons/icon-mail-white.svg" />
                           eleganza@gmail.com
                        </span>
                        <span>
                           <img src="./icons/icon-phone-white.svg" />
                           +886229961786
                        </span>
                        <span>
                           <a href="">
                              <img src="./icons/icon-message-white.svg" />
                              表單聯繫我們
                           </a>
                        </span>
                     </div>
                     <div class="link col-sm  mb-2">
                        <span class="title">營業時間</span>
                        <span>週一至週五 13:00-22:00</span>
                        <span>週六 9:00-21:30</span>
                        <span>241 新北市三重區慈愛街18號</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr class="mt-0">
         <div class="text-center copyright">
            Copyright 2024© Eleganza Studio | All rights reserved
         </div>
      </div>
   </footer>
</body>

</html>