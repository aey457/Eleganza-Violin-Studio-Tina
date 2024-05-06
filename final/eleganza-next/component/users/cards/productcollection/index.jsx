import { useState } from 'react';
import React from 'react';
import styles from './productcollection.module.scss';

export default function ProductCard() {
    const [isMobileButtonClicked, setIsMobileButtonClicked] = useState(false);

    const handleMobileButtonClick = () => {
        setIsMobileButtonClicked(!isMobileButtonClicked);
    };

    return (
        <div className={`${styles['productcard']} ${isMobileButtonClicked ? styles['mobile-clicked'] : ''}`}>
            <a href="">
                <img
                    src="/images/product_images/6746845_800.jpg"
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
                    <a className={styles['icon-mobile']} href="#" onClick={handleMobileButtonClick}>
                        <img src="/icons/icon-chevron-right.svg" alt="手機版" />
                    </a>
                    <div className={styles['productcardicons']}>
                        <a href="">
                            <img src="/icons/icon-cart.svg" alt="購物車" />
                        </a>
                        <a href="">
                            <img src="/icons/icon-liked.svg" alt="收藏" />
                        </a>
                    </div>
                </ul>
            </div>
            {isMobileButtonClicked && (
                <div className={`${styles['productcard-hidden']} `}>
                    <div className={styles['hiddenbtn']}>
                        <a href="">加入購物車</a>
                    </div>
                    <div className={styles['hiddenbtn']}>
                        <a href="">刪除</a>
                    </div>
                </div>
            )}
        </div>
    );
}