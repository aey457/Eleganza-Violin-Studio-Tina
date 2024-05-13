import { useState, useEffect } from 'react';
import React from 'react';
import styles from './productcollection.module.scss';

export default function ProductCard() {
    const [productDetails, setProductDetails] = useState(null);
    const [products, setProducts] = useState([]);
   
    const getProducts = async () => {
        const url = 'http://localhost:3005/api/my-lessoncollection/productcollection/2';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        if (Array.isArray(data.pcollections)) {
          setProducts(data.pcollections);
        } else {
          console.error('Collections data is not an array:', data.pcollections);
        }
      };
      // 樣式2: didMount階段只執行一次
      useEffect(() => {
        // 頁面初次渲染之後伺服器要求資料
        getProducts()
      }, [])

//    useEffect(() => {
//      // 向後端 API 端點發送請求獲取使用者資料
//      fetch(`http://localhost:3005/api/my-productcollection/${productId}`)
//        .then((response) => response.json())
//        .then((data) => {
//          setProductDetails(data.productDetails);
//        })
//        .catch((error) => console.error('Error fetching product details:', error));
//    }, [productId]); 

    const [isMobileButtonClicked, setIsMobileButtonClicked] = useState(false);

    const handleMobileButtonClick = () => {
        setIsMobileButtonClicked(!isMobileButtonClicked);
    };

    return (
        <>
            {products.map((v, i) => (  
                <div key={v.user_id}>
                <div className={`${styles['productcard']} ${isMobileButtonClicked ? styles['mobile-clicked'] : ''}`}>
                    <a href={`/products/${v.product_id}`}>
                        <img
                            src={`/images/product_images/${v.img}`}
                            alt=""
                            className={styles['productcardimg']}
                        />
                    </a>
                    <div className={styles['product-word']}>
                        <ul className={`${styles.productcardtitle} list-unstyled`}>
                            <li className={styles['productbranding']}>
                                <a href={`/products/${v.product_id}`}>{v.brand}</a>
                            </li>
                            <li>
                                <a className={styles['productname']} href={`/products/${v.product_id}`}>
                                    {v.name}
                                </a>
                            </li>
                        </ul>
                        <ul className={`${styles['productcard-function']} list-unstyled`}>
                            <li className={styles['productprice']}>{v.product_price}</li>
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
                </div>
            ))}
        </>
    );
}