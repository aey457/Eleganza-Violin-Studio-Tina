import { useState } from 'react'
import styles from './product-detail.module.scss'

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
        <button className="flex-grow-1">加入購物車</button>
      </div>
    </div>
  )
}
