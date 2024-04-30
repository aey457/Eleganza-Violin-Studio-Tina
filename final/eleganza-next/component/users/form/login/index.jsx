import React from 'react'
import styles from './login.module.scss'

export default function Login() {
  return (
    <>
        <div className={styles.overlaybg}  >
            <div className={styles.popupwindow} >
                <a href="">
                <img src="./icons/icon-x.svg" alt="" />
                </a>
                <div className={styles.formwrap} >
                <div className={styles.logo} >
                    {" "}
                    <a href="">ELEGANZA</a>
                </div>
                <div className={styles.formwraps} >
                    <div className={styles.form}>
                    <p className={styles.formkey}>Email</p>
                    <input className={styles.formvalue} type="text" />
                    </div>
                    <div className={styles.form}>
                    <p className={styles.formkey}>密碼</p>
                    <input className={styles.formvalue} type="password" />
                    </div>
                    <div className={styles.formcheck} >
                    <div className={styles.checkloginstatus} >
                        <input type="checkbox" />
                        <p>保持登入狀態</p>
                    </div>
                    <a href="">忘記密碼？</a>
                    </div>
                    <div className={styles.mbtn}>
                    <a href="">登入</a>
                    </div>
                </div>
                <div className={styles.registeraccount} >
                    <a href="">註冊帳號</a>
                </div>
                </div>
            </div>
            </div>
    </>
  )
}