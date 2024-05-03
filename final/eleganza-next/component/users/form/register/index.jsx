import React from 'react'
import styles from './register.module.scss'

export default function RegisterForm() {
  return (
    <>
        <div className={styles.overlaybg}  >
            <div className={styles.popupwindow} >
                <a href="">
                <img src="/icons/icon-x.svg" alt="" />
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
                    <p className={styles.formkey}>手機號碼</p>
                    <input className={styles.formvalue} type="text" />
                    </div>
                    <div className={styles.form}>
                    <p className={styles.formkey}>密碼</p>
                    <input className={styles.formvalue} type="password" />
                    <div className={styles.passwordlevel} >
                        <div className={styles.passwordintensity}  />
                        <div className={styles.passwordintensity} />
                        <div className={styles.passwordintensity} />
                        <div className={styles.passwordintensityl} />
                    </div>
                    </div>
                    <div className={styles.form}>
                    <p className={styles.formkey}>重新輸入密碼</p>
                    <input className={styles.formvalue} type="password" />
                    </div>
                    <div className={styles.formcheck}>
                    <div className={styles.checkloginstatus}>
                        <input type="checkbox" />
                        <p>保持登入狀態</p>
                    </div>
                    <a href="">忘記密碼？</a>
                    </div>
                    <div className={styles.mbtn}>
                    <a href="">登入</a>
                    </div>
                </div>
                <div className={styles.registeraccount}>
                    <p>已有帳號了嗎？</p>
                    <a href="">由此登入</a>
                </div>
                </div>
            </div>
            </div>
    </>
  )
}