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
      .main{
         display: flex;
         flex-direction: row;
         align-items: flex-start;
         /* 或許也可用Bootstrap的Grid */
      @media (max-width:1024px) {
            padding-inline: 20px;
         }
      }
      
         .list-unstyled{
            list-style: none;
            margin: 0;
            padding: 0;
        }
         .sidenav-mobile{
            display: none;
            } 
            @media (max-width:1024px) {
            .sidenav-mobile{
               display: none;
            }
         }
            
         .sidenav-desktop{
            background-color: var(--color-text-light);
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
            min-width: 280px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-right: 40px;

            & ul{
               display: flex;
               min-width: 240px; 
               flex-direction: column;
               align-items: flex-start;
               gap: 20px;
            }
            .sidenavsub-desktop{
               display: flex;
               flex-direction: column;
               align-items: flex-start;
               gap: 10px;
               margin-top: -10px;
               color: var(--color-text-medium);
               font-size: var(--fs-hint);
            }
               & ul{
                  list-style: none;
                  margin: 0;
                  padding: 0;
               }
            .sidenavsub-desktop li.current a{
               color: var(--color-secondary-medium);
            }
            .sidenavsub-desktop a{
               color: var(--color-text-medium);
            }
            .sidenavsub-desktop a:hover{
               color: var(--color-primary-dark);
            }
            
         }
         .accountname{
               padding: 0 0 0 0;
               border-bottom: 0.5px solid var(--color-primary-medium); 
            }

         .accountform{
               /* margin-top: -20px; */
            }
               & a{
                  text-decoration: none;
                  color: var(--color-secondary-dark);
               }
               & a:hover {
                  color: var(--color-primary-dark);
               }
                  .sidenavselected{
                     color: var(--color-secondary-medium);
                  }
                  .sidenavlogout{
                     color: var(--color-danger);
                  }   
               
         @media (max-width:1024px) {
            .sidenav-desktop{
               display: none !important;     
               }
         }
      .mainarea-desktop-mylesson{
         display: flex;
         flex-direction: row;
         flex-wrap: wrap; /* 自动换行 */
         align-items: flex-start;
         width: 100%; /* 占满父容器的宽度 */
         flex: 1 0 0;
         gap: 20px;
         @media (max-width:1024px) {
            display: none;
         }
      }
      .lessoncard{
         display: flex;
         flex-direction: row;
         align-items: flex-start;
         padding: 10px;
         align-items: center;
         gap: 10px;
         /* flex: 1 0 0; */
         width: 450px;
         border-radius: 8px;
         background: var(--color-text-light);
         box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
         @media (max-width:1024px) {
            border-radius: 0;
            box-shadow: none;
            width: 100%;
            border-bottom: 0.5px solid var(--stroke, #9C9191);
            align-items: center;
            padding: 16px 10px;
         }
      }
      .lessoncard-word{
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         align-self: stretch; 
         /* 讓上下行垂直佔滿父容器高度 */
         color: var(--color-text-dark);
         gap: auto;
         @media (max-width:1024px) {
            align-self: stretch;
            gap: auto;
         }
      }
      
      .lessoncardtitle{
         /* margin-bottom: 12px; */
      } 
      
      .lessoncardimg{
         max-width: 100px; 
         max-height: 100px;  
         border-radius: 4px;
         background: contain no-repeat;
         & img{
            width: 100%;
            height: 100%;
         }
         @media (max-width:1024px) {
            max-width: 72px; 
            max-height: 72px;
            border-radius: 4px;
            & img{
               width: 100%;
               height: 100%;
            }
         }
      }
      .lessondate{
         font-size: var(--fs-hint)
      }
      .lessonname{
         font-size: var(--fs-p);
         @media (max-width:1024px) {
            font-size: var(--fs-hint);
         }
      }
      .teachername{
         font-size: var(--fs-hint);
         font-family: var(--font-noto-sans);
      }
      @media (max-width:1024px) {
         .lessonname a,
         .teachername a {
            display: block;
            line-height: 0;
         }
      }
      .lessoncardtime{
         font-size: var(--fs-p);
         @media (max-width:1024px) {
            font-size: var(--fs-hint);
         }
      }


      .tabs-desktop ul{
         display: flex; /* 使用 flexbox 進行水平排列 */
         flex-direction: row;
         align-items:flex-start;
         list-style: none; /* 移除項目的點點符號 */
         padding: 40px 0; /* 移除 ul 元素的預設填充 */
         font-size: var(--fs-p);
      }
      .tabs-desktop a{
         text-decoration: none;
         color: var(--color-text-medium);
         margin: 0 8px;
      }
      .tabs-desktop a:hover{
         text-decoration: none;
         color: var(--color-secondary-medium);
         margin: 0 8px;
      }
      .tabs-desktop li.current a{
         text-decoration: none;
         color: var(--color-text-dark);
         margin: 0 8px;
      }
         
      .tabs-mobile{
         display: none;
      }
      @media (max-width:1024px) {
         .tabs-desktop{
            display: none;
         }
         .tabs-mobile{
            display: flex;
            padding: 20px 0;
            justify-content:flex-start;
            
            & a{
               margin-inline: 4px;
               text-decoration: none;
               color: var(--color-secondary-dark);
            }
         }
      }
      .lesson-mobile{
         display: none; 
      }
         @media (max-width:1024px) {
            .lesson-mobile{
               display: flex;
               flex-direction: column;
               gap:0;
               background-color: var(--color-text-light);
               width: 100%;
               border-radius: 8px;
               /* margin-inline: 20px; */
               padding: 0 0 12px 0;
            }
               .btn-mobile{
               width: 100%;
               display: flex;
               flex-direction: row;
               justify-content: space-between;
               align-items: center;
               padding: 12px 10px;
               gap: auto;
               background-color: var(--color-text-light);
               border-radius: 8px 8px 0px 0px;
               border-bottom: 0.5px solid var(--stroke, #9C9191);
            }
            .sbtn{
               display: flex;
               padding: 4px 12px;
               justify-content: center;
               align-items: center;
               /* gap: 10px; */
               flex: 1 0 0;
               border-radius: 4px;
            }
               & a{
                  color: var(--color-text-medium);
               }
            .sbtn-selected{
               background-color: var(--color-secondary-dark);
               display: flex;
               padding: 4px 12px;
               justify-content: center;
               align-items: center;
               /* gap: 10px; */
               flex: 1 0 0;
               border-radius: 4px;
               & a{
                  color: var(--color-text-light);
               }
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
      <div class="tabs-desktop">
         <ul class="list-unstyled">
            <li>
               <a  href="">首頁</a> / 
            </li>
            <li>
               <a  href="">會員中心</a> /
            </li>
            <li class="current">
               <a  href="">我的課程</a> 
            </li>
         </ul>
      </div>
      <div class="tabs-mobile">
         <ul class="list-unstyled">
            <li>
               <a href="#"><img src="./icons/icon-chevron-left.svg" alt=""></a>
               我的課程
            </li>
         </ul>
      </div>
      <div class="main">
         <div class="sidenav-desktop">
            <ul class=" list-unstyled accountname">
               <li class="">
                  <div><p>Fanny456</p></div>
               </li>
            </ul>
            <ul class="list-unstyled accountform">
               <li>
                  <a   href="">我的帳號</a> 
               </li>
               <a class="sidenavselected" href="">我的課程</a> 
               <ul class="sidenavsub-desktop">
                  <li class="current">
                        <a href="">尚未開始</a>
                  </li>
                  <li>
                        <a href="">已結束</a>
                  </li>
               </ul>
               <li>
                  <a   href="">收藏內容</a> 
               </li>
               <li>
                  <a   href="">歷史訂單</a> 
               </li>
               <li>
                  <a class="sidenavlogout" href="">登出</a> 
               </li>
            </ul>
         </div>
         <div class="sidenav-mobile">
            <ul class=" list-unstyled accountname">
               <li class="">
                  <a  href="">Fanny456</a>  
               </li>
            </ul>
            <hr>
            <ul class="list-unstyled accountform-mobile">
               <li>
                     <a class="sidenavselected" href="#">我的帳號
                        <img src="./icons/icon-chevron-right.svg" alt="">
                    </a>
               </li>
               <li>
                  <a   href="">我的課程
                     <img src="./icons/icon-chevron-right.svg" alt="">
                  </a> 
               </li>
               <li>
                  <a   href="">收藏內容
                     <img src="./icons/icon-chevron-right.svg" alt="">
                  </a> 
               </li>
               <li>
                  <a   href="">歷史訂單
                     <img src="./icons/icon-chevron-right.svg" alt="">
                  </a> 
               </li>
               <li>
                  <a class="sidenavlogout" href="">登出</a> 
               </li>
            </ul>
         </div>
         <div class="mainarea-desktop-mylesson">
            <div class="lessoncard">
                <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
                <div class="lessoncard-word">
                    <ul class="lessoncardtitle list-unstyled">
                        <li class="lessondate">2024/11/4</li>
                        <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                        <li><a class="teachername" href="">伍俊彥 教師</a></li>
                    </ul>
                    <ul class=" list-unstyled">
                        <li class="lessoncardtime">18:00~20:00</li>
                    </ul>
                </div>
            </div>
            <div class="lessoncard">
                <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
                <div class="lessoncard-word">
                    <ul class="lessoncardtitle list-unstyled">
                        <li class="lessondate">2024/11/4</li>
                        <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                        <li><a class="teachername" href="">伍俊彥 教師</a></li>
                    </ul>
                    <ul class=" list-unstyled">
                     <li class="lessoncardtime">18:00~20:00</li>
                    </ul>
                </div>
            </div>
            <div class="lessoncard">
                <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
                <div class="lessoncard-word">
                    <ul class="lessoncardtitle list-unstyled">
                        <li class="lessondate">2024/11/4</li>
                        <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                        <li><a class="teachername" href="">伍俊彥 教師</a></li>
                    </ul>
                    <ul class=" list-unstyled">
                     <li class="lessoncardtime">18:00~20:00</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lesson-mobile">
         <div class="btn-mobile">
            <div class="sbtn-selected"><a href="">全部課程</a></div>
            <div class="sbtn"><a href="">尚未開始</a></div>
            <div class="sbtn"><a href="">課程結束</a></div>
         </div>
         <div class="lessoncard">
            <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
            <div class="lessoncard-word">
                <ul class="lessoncardtitle list-unstyled">
                    <li class="lessondate">2024/11/4</li>
                    <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                    <li><a class="teachername" href="">伍俊彥 教師</a></li>
                </ul>
                <ul class="list-unstyled">
                    <li class="lessoncardtime">18:00~20:00</li>
                </ul>
            </div>
        </div>
        <div class="lessoncard">
         <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
         <div class="lessoncard-word">
             <ul class="lessoncardtitle list-unstyled">
                 <li class="lessondate">2024/11/4</li>
                 <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                 <li><a class="teachername" href="">伍俊彥 教師</a></li>
             </ul>
             <ul class="list-unstyled">
                 <li class="lessoncardtime">18:00~20:00</li>
             </ul>
         </div>
         </div>
         <div class="lessoncard">
                  <img src="./images/teacher_images/WuJunyan.jpg" alt="" class="lessoncardimg">
                  <div class="lessoncard-word">
                     <ul class="lessoncardtitle list-unstyled">
                        <li class="lessondate">2024/11/4</li>
                        <li><a class="lessonname" href="">小提琴演奏初階個別課</a></li>
                        <li><a class="teachername" href="">伍俊彥 教師</a></li>
                     </ul>
                     <ul class="list-unstyled">
                        <li class="lessoncardtime">18:00~20:00</li>
                     </ul>
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