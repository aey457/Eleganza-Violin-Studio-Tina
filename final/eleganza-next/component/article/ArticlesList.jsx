// components/ArticlesList.js
import React, { useState, useEffect } from 'react'
import Cards from '@/component/article/card'
// 假設你有一個用於顯示單個文章的 Card 組件
import articles from '@/data/articles.json'

function ArticlesList() {
  const [articles, setArticles] = useState([]) // 用於存儲文章數據
  const [isLoading, setIsLoading] = useState(false) // 加載狀態
  const [error, setError] = useState(null) // 存儲任何加載錯誤

  // 數據加載
  useEffect(() => {
    setIsLoading(true)
    fetch('/api/articles') // 假設你有一個這樣的 API 端點
      .then((response) => response.json())
      .then((data) => {
        setArticles(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  // 加載中 UI
  if (isLoading) return <div>Loading...</div>

  // 錯誤處理 UI
  if (error) return <div>Error: {error}</div>

  // 文章列表 UI
  return (
    <div>
      {articles.map((article) => (
        <Cards
          key={article.id}
          imageUrl={article.imageUrl}
          date={article.date}
          title={article.title}
          summary={article.summary}
        />
      ))}
    </div>
  )
}

export default ArticlesList
