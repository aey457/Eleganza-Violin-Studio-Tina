import React from 'react'
import styles from './productcollection.module.scss'

export default function ProductCollection() {
  return (
    <>
        <div className={styles['productcard']} >
            <a href="">
                <img
                src="./images/product_images/6746845_800.jpg"          
                alt=""
                className={styles['productcardimg']} 
                />
            </a>
            <div className={styles['product-word']} >
                <ul className={`${styles.productcardtitle} list-unstyled`} >
                <li className={styles['productbranding']} >
                    <a href="">Karl Höfner</a>
                </li>
                <li>
                    <a className={styles['productname']} href="">
                    Allegro 3/4 Violin Outfit
                    </a>
                </li>
                </ul>
                <ul className={`${styles['productcard-function']} list-unstyled`}  >
                <li className={styles['productprice']} >$8,5000</li>
                <div className={styles['productcardicons']} >
                    <a href="">
                    <img src="./icons/icon-cart.svg" alt="購物車" />
                    </a>
                    <a href="">
                    <img src="./icons/icon-liked.svg" alt="收藏" />
                    </a>
                </div>
                </ul>
            </div>
            </div>
        <div className={styles['productcard']}>
                <a href="">
                    <img
                    src="./images/product_images/6746845_800.jpg"
                    alt=""
                    className={styles['productcardimg']}
                    />
                </a>
                <div className={styles['product-word']}>
                    <ul className={`${styles.productcardtitle} list-unstyled`}>
                    <li className={styles['productbranding']}>
                        <a href="">Karl Höfner</a>
                    </li>
                    <li>
                        <a className={styles['productname']} href="">
                        Allegro 3/4 Violin Outfit
                        </a>
                    </li>
                    </ul>
                    <ul className={`${styles['productcard-function']} list-unstyled`}>
                    <li className={styles['productprice']}>$8,5000</li>
                    <a className={styles['icon-mobile']} href="">
                        <img src="./icons/icon-chevron-right.svg" alt="手機版" />
                    </a>
                    <div className={styles['productcardicons']}>
                        <a href="">
                        <img src="./icons/icon-cart.svg" alt="購物車" />
                        </a>
                        <a href="">
                        <img src="./icons/icon-liked.svg" alt="收藏" />
                        </a>
                    </div>
                    </ul>
                </div>
                </div>

    </>
  )
}
