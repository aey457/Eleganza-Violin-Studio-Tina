import React, { useState } from 'react'
import styles from './navbar.module.scss'

// 防抖函数，用于优化性能，防止频繁发起请求
function debounce(fn, delay) {
  let timeoutId
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

export default function Navbar({
  onCourseFilter,
  onSortChange,
  onSearchResults,
  showSearch = true,
  showSort = true,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 1, name: '初階個別課' },
    { id: 2, name: '中階個別課' },
    { id: 3, name: '高階個別課' },
    { id: 4, name: '團體課' },
  ]

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
    onCourseFilter(categoryId)
  }

  const handleSortChange = (event) => {
    onSortChange(event.target.value)
  }

  // 处理搜索逻辑，包括调用防抖函数
  const handleSearch = async (searchValue) => {
    if (searchValue.trim()) {
      try {
        const encodedSearchValue = encodeURIComponent(searchValue) // 确保编码URL
        const response = await fetch(
          `/api/courses/search/${encodedSearchValue}`,
        )
        const results = await response.json()
        console.log('API response:', results) // 打印API返回的数据
        if (response.ok) {
          onSearchResults(results.data.courses) // 调用父组件的回调函数，将搜索结果传递给父组件
        } else {
          console.error('搜索请求失败:', results)
        }
      } catch (error) {
        console.error('搜索请求错误:', error)
      }
    } else {
      onSearchResults([]) // 清空搜索结果
    }
  }

  const debouncedSearch = debounce(handleSearch, 300) // 设置300毫秒的防抖时间

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    debouncedSearch(newSearchTerm) // 使用防抖处理的搜索函数
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <button
            className={!selectedCategory ? styles.active : ''}
            onClick={() => handleCategoryClick(null)}
          >
            全部課程
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={selectedCategory === category.id ? styles.active : ''}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles['search-and-sort']}>
        {showSearch && (
          <>
            <img src="/icons/icon-search.svg" alt="Search" />
            <input
              type="text"
              placeholder="搜尋課程..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </>
        )}
        {showSort && (
          <>
            <label htmlFor="sortSelect" className={styles.sortLabel}>
              排序
            </label>
            <select
              id="sortSelect"
              onChange={handleSortChange}
              className={styles.sortSelect}
            >
              <option value="">請選擇</option>
              <option value="priceAsc">價格從低到高</option>
              <option value="priceDesc">價格從高到低</option>
            </select>
          </>
        )}
      </div>
    </nav>
  )
}
