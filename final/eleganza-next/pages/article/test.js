import { useState, useEffect } from 'react'
import Link from 'next/link'
import articlesData from '@/data/articles.json' // 導入您的 JSON 資料
import SideContent from '@/component/article/sidecontent'
import StarRating from '@/component/article/star-rating'
import Comment from '@/component/article/comment'
import CommentsPage from '@/component/article/comment'

export default function List() {
  const [articles, setArticles] = useState([])

  const getArticles = () => {
    try {
      // 直接使用導入的資料
      if (Array.isArray(articlesData)) {
        setArticles(articlesData)
      } else {
        console.log('資料類型錯誤，無法設定到狀態中')
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
      <h1>文章列表頁</h1>
      {/* <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Link href={`/article/${article.article_id}`}>
              <p>{article.article_title}</p>
            </Link>
          </li>
        ))}
      </ul> */}
      <div>
        {/* {articlesData.map((article) => (
          <SideContent
            id={article.article_id}
            imageUrl={`/images/article/${article.article_img}`}
            date={article.article_date}
            title={article.article_title}
          />
        ))} */}
      </div>
      <div>
        {/* <Comment /> */}
        <CommentsPage />
        <StarRating />
      </div>
    </>
  )
}
