import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'

export default function Index() {
  const { auth } = useAuth()
  const router = useRouter()

  return (
    <>
      <div className="landing-page position-relative overflow-hidden">
        <div className="mb-5">
          <h1>ELEGANZA</h1>
          <h1>VIOLIN</h1>
          <h1>STUDIO</h1>
        </div>
        <h3>阿爾扎小提琴工作室</h3>
        <img
          className="position-absolute top-0 end-0"
          src="/homepage/violin.png"
        />
      </div>
      <div className="intro d-flex justify-content-center align-items-center text-center">
        歡迎光臨阿爾扎小提琴工作室，
        <br />
        我們不僅提供世界知名品牌的小提琴及相關商品，
        <br />
        還擁有由教學起家的專業小提琴教師團隊。
        <br />
        從興趣班到專業升學，從入門到高階，
        <br />
        我們提供個別和團體課程，滿足各種需求。
        <br />
        自1997年成立以來，隨著業務擴展和人員增加，
        <br />
        我們不定期邀請國內外大師來舉辦大師班和講座，
        <br />
        以親民的價格讓更多人接觸古典音樂。
        <br />
      </div>
      <div className="latest">
        <h3>最新系列</h3>
        <div className="">
          <div className="row">
            <div className="col">
              <div className="info d-flex obj-fit justify-content-between p-3 bg-white">
                <div className="ratio ratio-1x1 w-50">
                  <img src="/icons/icon-cart.svg" />
                </div>
                <div className="w-50 d-flex flex-column justify-content-between">
                  <div>
                    <h3>義大利史特拉西瓦里1/2小提琴 2024花樣限定版</h3>
                    <p>
                      復刻經典款數據融合現代花樣的義到倆史各拉西瓦里 1/2
                      尺寸白色小提琴套裝甫進本工作室，既美麗又獨特。
                    </p>
                  </div>
                  <button className="flex-end">了解更多</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="info d-flex obj-fit justify-content-between p-3 bg-white">
                <div className="ratio ratio-1x1 w-50">
                  <img src="/icons/icon-cart.svg" />
                </div>
                <div className="w-50 d-flex flex-column justify-content-between">
                  <div>
                    <h3>義大利史特拉西瓦里1/2小提琴 2024花樣限定版</h3>
                    <p>
                      復刻經典款數據融合現代花樣的義到倆史各拉西瓦里 1/2
                      尺寸白色小提琴套裝甫進本工作室，既美麗又獨特。
                    </p>
                  </div>
                  <button className="flex-end">了解更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="violin-section row">
        <h3>如何選購您的第一把小提琴</h3>
        <div className="col-6 h-75">
          <img className="obj-fit" src="/homepage/violin.png" />
        </div>
        <div className="col-6 section-info d-flex flex-column justify-content-center">
          <h2>琴身</h2>
          <p>
            小提琴最主要的部位 :
            琴身（包含琴頭、琴頸、指板和共鳴箱），是由約70多塊木片組合而成，其結構簡單分為琴頭、琴頸、指板和共鳴箱，各自嚴選不同材質的木頭製作，例如拱形面板選用質地稍軟的雲杉木；從側板、背板、漩渦狀的琴頭到琴頸是由質地較硬的楓木所刻成；而按弦所用的木頭則是烏木。
            <br />
            大多數的樂器誕生時，皆須考慮到共鳴的效應。對於琴身而言，共鳴箱是非常功不可沒的重要角色，透過共鳴箱將琴弦震動的聲音擴大響度。除此之外，琴身也必須「能屈能伸」，既可承受來自琴弦的張力，同時又要兼具輕薄才能穩定地震動。而琴身內的音柱，則負責將聲波由面板傳到背板。
          </p>
          <div>查看選購要點專欄文章</div>
          {/* <button>查看商品</button> */}
        </div>
      </div>
      <div className="our-class">
        <div className="row">
          <div className="col-6">
            <h3>挑選適合自己的課程</h3>
            <p className="">
              阿爾扎工作室以教學起家，
              <br />
              許多現職教師更是從創設起至今已在此服務超過25年，
              <br />
              適合學興趣與國內外中學至高等教育階段升學的學子們，
              <br />
              也適合小提琴職業演奏家繼續在此精進專業。
              <br />
              <button>查看課程</button>
            </p>
          </div>
          <div className="col-6">
            <div className="class-cate">
              <img className="obj-fit" src="/homepage/1.png" />
              <div>
                <h4>國內外大師班：</h4>
                <p>
                  常態課程包括大學音樂系內開設的課程如樂團片段、室內樂小班教學，還有不定期推出的新課程如影視配樂小提琴曲目選粹。
                </p>
              </div>
            </div>
            <div className="class-cate">
              <img className="obj-fit" src="/homepage/2.png" />
              <div>
                <h4>多樣主題團體班：</h4>
                <p>
                  不定期邀請國內外小提琴名師在本工作室內外開設大師班、演講與演出，讓有一定程度的學子與廣大民眾都有近距離認識古典音樂、接受大師指導的機會。
                </p>
              </div>
            </div>
            <div className="class-cate">
              <img className="obj-fit" src="/homepage/3.png" />
              <div>
                <h4>初中高階個別課：</h4>
                <p>
                  有古典與爵士小提琴可選擇，個別課教師會針對學生學習狀況指導。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-page {
            height: 100vh;
            padding-top: 80px;
          }
          h1 {
            font-family: 'Playfair Display SC', serif;
            font-size: 120px;
            line-height: 80%;
          }
          .intro {
            font-size: 28px;
            height: 85vh;
            overflow-wrap: break-word;
            font-family: 'Noto Serif TC';
            font-weight: 500;
          }
          .info {
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
            & h3 {
              font-size: 24px;
              font-weight: 500;
              
            }
            gap: 20px;
            border-radius: 8px;
            & p {
              font-size: 16px;
            }
          }
          button {
            color: var(--color-text-light);
            border: none;
            border-radius: 4px;
            padding: 12px 16px;
            background: var(--color-secondary-dark);
          }
          .violin-section {
            height: 100vh;
         
            & img {
              transform: scaleX(-1) rotate(-7deg);
            }

            .section-info{
            & h2{
               margin-bottom:24px;
               {/* font-family: 'Noto Serif TC'; */}
            }
            }
          }
          .obj-fit {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .class-cate {
            margin-bottom: 40px;
            img {
              border-radius: 8px;
              margin-bottom: 12px;
            }
          }
          .latest{
            margin-bottom: 40px;
            & h3{
               margin-bottom:28px;
            }
          }
          .our-class{
          
          }
        `}
      </style>
    </>
  )
}
