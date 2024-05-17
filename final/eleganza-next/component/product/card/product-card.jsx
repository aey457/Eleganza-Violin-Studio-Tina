import React from 'react'
import styles from './product-card.module.scss'
import useAddToCart from '@/hooks/useAddToCart'

export default function ProductCard({ product_id, img, price, name, brand}) {
  // 品牌只顯示一次
  const { addToCart } = useAddToCart()

  console.log('product_id:', product_id)

  const handleAddToCart = () => {
    if (product_id) {
      addToCart({ id: product_id, type: 'product' })
    } else {
      console.error('未找到對應的 product_id')
    }
  }

  return (
    <>
      <div
        className={`${styles['product']} h-100 d-flex flex-column justify-content-between `}
      >
        <div className="d-flex flex-column flex-grow-1">
          <div className={`p-3`}>
            <div className="ratio ratio-1x1">
              <img
                className={`${styles['obj-fit']}`}
                src={`/images/product_images/${img}`}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${styles['info']} py-2 px-3 d-flex flex-column flex-grow-1 h-100 justify-content-between `}
          >
            <div className="mb-2 mb-sm-3">
              <div className={styles['brand']}>{brand}</div>
              <div className={styles['product-name']}>{name}</div>
            </div>
            <div className="d-flex justify-content-between">
              $ {price}
              <div className="d-flex justify-content-between">
                <img
                  className={`${styles['like']} pe-2`}
                  src="/icons/icon-like.svg"
                  alt=""
                />
                <img
                  className={`${styles['cart']}`}
                  src="/icons/icon-cart.svg"
                  alt=""
                  onClick={()=>handleAddToCart()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
