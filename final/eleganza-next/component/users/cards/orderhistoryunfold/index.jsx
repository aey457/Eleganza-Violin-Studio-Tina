import React from 'react'
import styles from './orderhistoryunfold.module.scss'

export default function OrderHistoryUnfold() {
  return (
    <>
        <div className={`${styles['orderhistorydetailrow']}`} >
            <div className={styles.orderhistorydetail} >
                <div className={styles.orderimg} >
                <a href="">
                    <img src="./images/product_images/111069.jpg" alt="" />
                </a>
                </div>
                <div className={styles.orderwords} >
                <div className={styles.ordertitle} >
                    <a href="" className={styles.orderbrand} >
                    Karl Höfner{" "}
                    </a>
                    <a href="">Allegro 3/4 Violin Outfit</a>
                </div>
                <div className={styles.orderprice} >
                    <p>$8,5000</p>
                    <div className={styles.orderquantity} >
                    <img src="./icons/icon-x.svg" alt="" />
                    <p>1</p>
                    </div>
                </div>
                </div>
            </div>
            <div
                style={{
                width: "0.5px",
                height: 146,
                background: "var(--color-primary-medium)"
                }}
            />
            <div className={styles.orderhistorydetail2} >
                <div className={styles.creditcard}  >
                <p>信用卡</p>
                <div className={styles.creditcardno} >
                    <p>Visa **42</p>
                    <img
                    src="./icons/visa-credit-card-logo-payment-mastercard-usa-visa-e2526db464dd09168c03c4916787dd35.png"
                    alt=""
                    />
                </div>
                </div>
                <div className={styles.creditcard} >
                <p>宅配到府</p>
                <div className={styles.creditcardno}   >
                    <p>新北市板橋區仁愛路5段11巷8樓</p>
                </div>
                </div>
            </div>
            </div>
    </>
  )
}