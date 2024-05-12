import { useState, useEffect } from 'react';
import React from 'react';
import styles from './orderhistoryunfold.module.scss';

export default function OrderHistoryUnfoldCard() {
    const [orders, setOrders] = useState([]);
   
    const getOrders = async () => {
        const url = 'http://localhost:3005/api/my-lessoncollection/productorder2/4';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        if (Array.isArray(data.porders2)) {
          setOrders(data.porders2);
        } else {
          console.error('Collections data is not an array:', data.porders2);
        }
      };
      // 樣式2: didMount階段只執行一次
      useEffect(() => {
        // 頁面初次渲染之後伺服器要求資料
        getOrders()
      }, [])
    // const [orderDetails, setOrderDetails] = useState(null);

    // useEffect(() => {
    //     // 向後端 API 端點發送請求獲取使用者資料
    //     fetch(`http://localhost:3005/api/order-history/${orderId}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setOrderDetails(data.orderDetails);
    //       })
    //       .catch((error) => console.error('Error fetching order details:', error));
    //   }, [orderId]); 

    //   
    const [products, setProducts] = useState([]);
   
    const getProducts = async () => {
        const url = 'http://localhost:3005/api/my-lessoncollection/productorder/4';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        if (Array.isArray(data.porders)) {
          setProducts(data.porders);
        } else {
          console.error('Collections data is not an array:', data.porders);
        }
      };
      // 樣式2: didMount階段只執行一次
      useEffect(() => {
        // 頁面初次渲染之後伺服器要求資料
        getProducts()
      }, [])

//     const [productDetails, setProductDetails] = useState(null);
   
//    useEffect(() => {
//      // 向後端 API 端點發送請求獲取使用者資料
//      fetch(`http://localhost:3005/api/my-productcollection/${productId}`)
//        .then((response) => response.json())
//        .then((data) => {
//          setProductDetails(data.productDetails);
//        })
//        .catch((error) => console.error('Error fetching product details:', error));
//    }, [productId]); 
      
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const toggleDetail = () => {
      setIsDetailOpen(!isDetailOpen);
    };
  
    return (
        <>
            {orders.map((order, orderIndex) => (  
                <div key={orderIndex}>
                    {/* 桌面端樣式 */}
                    <div className={`${styles['orderhistoryrow-l']} ${styles['desktop-only']}`} >
                        <p>{order.order_id}</p>
                        <p>{order.order_date}</p>
                        <p>${order.total_price}</p>
                        <p>{order.status}</p>
                        <div className={`${styles['checkdetail']}`} >
                            <p style={{ margin: 0 }}>查看詳情</p>
                            <a href="#" onClick={toggleDetail}>
                                <img src="/icons/icon-chevron-down.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    {/* 手機端樣式 */}
                    <div className={`${styles['orderhistoryrow-l']} ${styles['mobile-only']}`}>
                        <p>{order.order_id}</p>
                        <p>{order.order_date}</p>
                        <p>{order.status}</p>
                        <a href="#" onClick={toggleDetail}>
                            <img src="/icons/icon-chevron-down.svg" alt="" />
                        </a>
                    </div>
                    {/* 詳細內容 */}
                    {isDetailOpen && (
                        <div className={`${styles['orderhistorydetailrow']} `}>
                            <div className={styles.orderdetailleft}>
                                {/* 只展開當前訂單中的商品 */}
                                {products.filter(product => product.order_id === order.order_id).map((product, productIndex) => (
                                    <div key={productIndex}>           
                                        <div className={styles.orderhistorydetail}>
                                            <div className={styles.orderimg}>
                                                <a href="">
                                                    <img src="/images/product_images/17663193_800.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={styles.orderwords}>
                                                <div className={styles.ordertitle}>
                                                    <a href="" className={styles.orderbrand}>
                                                        {product.brand}
                                                    </a>
                                                    <a href="">{product.name}</a>
                                                </div>
                                                <div className={styles.orderprice}>
                                                    <p>{product.product_price}</p>
                                                    <div className={styles.orderquantity}>
                                                        <img src="/icons/icon-x.svg" alt="" />
                                                        <p>{product.total_quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* 繼續詳細內容的部分 */}
                            <div className={`${styles['orderhistorydetail2']} `}>
                                <div className={styles.creditcard}  >
                                    <p>{order.payment_method}</p>
                                    <div className={styles.creditcardno} >
                                        <p>{order.creditcard_no}</p>
                                        <img
                                            src="/icons/visa-credit-card-logo-payment-mastercard-usa-visa-e2526db464dd09168c03c4916787dd35.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={styles.creditcard} >
                                    <p>{order.shipping_method}</p>
                                    <div className={styles.creditcardno}   >
                                        <p>{order.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles['mobiletotal']} `} >
                                <p>總計</p>
                                <p>${order.total_price}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}