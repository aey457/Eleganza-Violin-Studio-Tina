import { useState } from 'react';
import styles from './orderhistoryunfold.module.scss';

export default function OrderHistoryUnfoldCard() {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const toggleDetail = () => {
      setIsDetailOpen(!isDetailOpen);
    };
  
    return (
        <>
            <div className={`${styles['orderhistoryrow-l']} ${styles['desktop-only']}`} >
                <p>#512384323</p>
                <p>November 17, 2023</p>
                <p>$8,8666</p>
                <p>已到貨</p>
                <div className={`${styles['checkdetail']}`} >
                    <p style={{ margin: 0 }}>查看詳情</p>
                    <a href="#" onClick={toggleDetail}>
                        <img src="/icons/icon-chevron-down.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className={`${styles['orderhistoryrow-l']} ${styles['mobile-only']}`}>
                <p>#512384323</p>
                <p>11/17/2023</p>
                <p>已到貨</p>
                <a href="#" onClick={toggleDetail}>
                    <img src="/icons/icon-chevron-down.svg" alt="" />
                </a>
            </div>
            {isDetailOpen && (
                <div className={`${styles['orderhistorydetailrow']} `} >
        
                    <div className={styles.orderhistorydetail} >
                        <div className={styles.orderimg} >
                            <a href="">
                                <img src="/images/product_images/111069.jpg" alt="" />
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
                                    <img src="/icons/icon-x.svg" alt="" />
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['orderhistorydetail2']} `}>
                        <div className={styles.creditcard}  >
                            <p>信用卡</p>
                            <div className={styles.creditcardno} >
                                <p>Visa **42</p>
                                <img
                                    src="/icons/visa-credit-card-logo-payment-mastercard-usa-visa-e2526db464dd09168c03c4916787dd35.png"
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
                    <div className= {`${styles['mobiletotal']} `} >
                        <p>總計</p>
                        <p>$8,7000</p>
                    </div>
                </div>
            )}
        </>
    );
}