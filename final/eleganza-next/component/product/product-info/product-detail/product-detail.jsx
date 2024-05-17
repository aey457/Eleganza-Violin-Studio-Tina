import { useState } from 'react'
import styles from './product-detail.module.scss'
import useAddToCart from '@/hooks/useAddToCart';

export default function ProductDetail({ product }) {
  const productName = product.name.replace(product.brand, '')
  // 要加入的商品數量
  const [num, setNum] = useState(1)
  const handleIncrese = () => {
    const next = num + 1
    setNum(next)
  }
  const handleDecrese = () => {
    let prev = num - 1
    if (prev - 1 < 0) {
      prev = 1
    }
    setNum(prev)
  }
  const addToCart = async () => {
    const product_id = product.product_id
    const user_id = localStorage.getItem('userId')

    // 檢查是否存在有效的 product_id 和 user_id
    if (!product_id || !user_id) {
      console.error('無效的 product_id 或 user_id')
      return
    }

    try {
      const response = await fetch('http://localhost:3005/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id, user_id }),
      })

      const result = await response.json()

      if (response.ok) {
        console.log('新增購物車商品成功:', result)
      } else {
        console.error('新增購物車商品失敗:', result.message)
      }
    } catch (error) {
      console.error('新增購物車項目時出錯:', error)
    }
  }

  return (
    <div className={styles['product-info']}>
      <div className={styles.brand + ' mb-1'}>{product.brand}</div>
      <div className={styles['product-name'] + ' mb-1'}>{productName}</div>
      <div className={'d-flex align-items-center ' + styles.rating}>
        <img src="/icons/icon-star-solid.svg" alt="" />
        <img src="/icons/icon-star-solid.svg" alt="" />
        <img src="/icons/icon-star-solid.svg" alt="" />
        <img src="/icons/icon-star-solid.svg" alt="" />
        <img src="/icons/icon-star-solid.svg" alt="" />
        <span className="ms-1 mt-1">4.3(24)</span>
      </div>
      <div className={styles.price}>${product.product_price}</div>
      <div className="d-flex justify-content-between">
        <img
          className={`${styles['like']}`}
          src="/icons/icon-like.svg"
          alt=""
        />
        <div className={'d-flex ' + styles.num}>
          <div
            className={`${styles['minus']} d-flex align-items-center`}
            onClick={handleDecrese}
          >
            <img src="/icons/icon-minus.svg" alt="" />
          </div>
          <div className={styles['num-area']}>{num}</div>
          <div
            className={`${styles['plus']} d-flex align-items-center`}
            onClick={handleIncrese}
          >
            <img src="/icons/icon-plus.svg" alt="" />
          </div>
        </div>
        <button className="flex-grow-1" onClick={addToCart}>
          加入購物車
        </button>
      </div>
    </div>
  )
}
