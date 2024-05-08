import React from 'react'
// import styles from './article-list.module.css'
import Link from 'next/link'

export default function Sort() {
  return (
    <>
      {/* main */}
      <main className="wrap flex-grow-1">
        {/* ------------------頁面內容------------------------ */}
        <div className="article-container">
          {/* 麵包屑 */}
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">首頁</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">弦樂專欄</a>
              </li>
              <li className="breadcrumb-item">
                <a className="back-button" href="#">
                  <img src="./icons/icon-chevron-left.svg" alt="" />
                  弦樂專欄
                </a>
              </li>
            </ol>
          </nav>
          {/* 選單 */}
          <div>
            <ul className="menu-articles">
              <li className="menu-article">
                <a href="">全部文章</a>
              </li>
              <li className="menu-article menu-article-active">
                <a href="">選購指南</a>
              </li>
              <li className="menu-article">
                <a href="">特殊課程</a>
              </li>
              <li className="menu-article">
                <a href="">最新商品</a>
              </li>
              <li className="menu-article">
                <a href="">最新展演</a>
              </li>
              {/* 搜尋功能 */}
              <div className="article-search">
                <a href="">
                  <img className="" src="./icons/icon-search.svg" />
                </a>
                <a href="">
                  排序
                  <img src="./icons/icon-chevron-down.svg" />
                </a>
              </div>
            </ul>
          </div>
          <hr />
          {/* cards */}
          <div className="cards-container">
            <div className="card">
              <div className="articel-img">
                <img src="./img/Rectangle 1119.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>感謝媒體專訪-有關提琴價值與價錢</h3>
                <p>
                  提琴的價差何以能夠在幾十倍、百倍，甚至千倍以上？豈是三言兩語就能說個清楚明白。
                </p>
                <p></p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>為何百年歷史的史特拉迪瓦里琴(Stradivari)打破拍賣紀錄?</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>選購小提琴的幾項提醒</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="cards-container">
            <div className="card">
              <div className="articel-img">
                <img src="./img/Rectangle 1119.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>感謝媒體專訪-有關提琴價值與價錢</h3>
                <p>
                  提琴的價差何以能夠在幾十倍、百倍，甚至千倍以上？豈是三言兩語就能說個清楚明白。
                </p>
                <p></p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>為何百年歷史的史特拉迪瓦里琴(Stradivari)打破拍賣紀錄?</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>選購小提琴的幾項提醒</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="cards-container">
            <div className="card">
              <div className="articel-img">
                <img src="./img/Rectangle 1119.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>感謝媒體專訪-有關提琴價值與價錢</h3>
                <p>
                  提琴的價差何以能夠在幾十倍、百倍，甚至千倍以上？豈是三言兩語就能說個清楚明白。
                </p>
                <p></p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>為何百年歷史的史特拉迪瓦里琴(Stradivari)打破拍賣紀錄?</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
              </div>
            </div>
            <div className="card">
              <div className="articel-img">
                <img src="./img/image.png" alt="" />
              </div>
              <div className="article-text">
                <time>2018-07-30</time>
                <h3>選購小提琴的幾項提醒</h3>
                <p>
                  如同Samuel
                  Staples,一位來自英國倫敦市政廳音樂及戲劇學院的演奏家所說：「Strad是每個小提琴家的夢想。」(&nbsp;“dreams
                  of playing a Strad.”)...
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a href="#" className="pagination-arrow">
              <img src="./icons/icon-chevron-left.svg" alt="" />
            </a>
            <a href="#" className="pagination-number">
              1
            </a>
            <a href="#" className="pagination-number">
              2
            </a>
            <a href="#" className="pagination-number">
              3
            </a>
            <a href="#" className="pagination-number">
              4
            </a>
            <a href="#" className="pagination-number">
              5
            </a>
            <a href="#" className="pagination-number">
              <img src="./icons/icon-chevron-right.svg" alt="" />
            </a>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer>
        <div className="footer-container">
          <div className="row justify-content-between">
            <div className="info col-xl-4">
              <div className="logo">ELEGANZA</div>
              <p>
                Eleganza Violin Studio
                是一家提供小提琴及其配件產品、小提琴課程、音樂會場地和日常練習場地，以及音樂推廣講座的小提琴音樂工作室。{' '}
              </p>
              <hr className="d-block d-xl-none" />
            </div>
            <div className="links row col-xl-7 justify-content-between">
              <div className="col">
                <div className="row justify-content-between">
                  <div className="link col-sm mb-2">
                    <span className="title">產品販售</span>
                    <span>
                      <a href="">小提琴</a>
                    </span>
                    <span>
                      <a href="">琴盒/弓</a>
                    </span>
                    <span>
                      <a href="">配件</a>
                    </span>
                  </div>
                  <div className="link col-sm  mb-2">
                    <span className="title">小提琴課程</span>
                    <span>
                      <a href="">各級個別課</a>
                    </span>
                    <span>
                      <a href="">團體課</a>
                    </span>
                    <span>
                      <a href="">大師班</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-between">
                  <div className="link col-sm  mb-2">
                    <span className="title">聯繫方式</span>
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
                  <div className="link col-sm  mb-2">
                    <span className="title">營業時間</span>
                    <span>週一至週五 13:00-22:00</span>
                    <span>週六 9:00-21:30</span>
                    <span>241 新北市三重區慈愛街18號</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="text-center">
            Copyright 2024© Eleganza Studio | All rights reserved
          </div>
        </div>
      </footer>
    </>
  )
}
