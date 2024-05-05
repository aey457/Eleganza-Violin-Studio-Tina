import React, { useState } from 'react';
import styles from './register.module.scss';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function RegisterForm() {
    const [email, setEmail] = useState(''); // 初始化 email 狀態
    const [phone, setPhone] = useState(''); // 初始化手機號碼狀態
    const [password, setPassword] = useState(''); // 初始化密碼狀態
    const [confirmPassword, setConfirmPassword] = useState(''); // 初始化重新輸入密碼狀態

    return (
        <>
            <div className={styles.overlaybg}>
                <div className={styles.popupwindow}>
                    <a href="">
                        <img src="/icons/icon-x.svg" alt="" />
                    </a>
                    <div className={styles.formwrap}>
                        <div className={styles.logo}>
                            <a href="">ELEGANZA</a>
                        </div>
                        <div className={styles.formwraps}>
                            <div className={styles.form}>
                                <p className={styles.formkey}>Email</p>
                                <input className={styles.formvalue} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.form}>
                                <p className={styles.formkey}>手機號碼</p>
                                <input className={styles.formvalue} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className={styles.form}>
                                <p className={styles.formkey}>密碼</p>
                                <input className={styles.formvalue} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <PasswordStrengthBar password={password} />
                            </div>
                            <div className={styles.form}>
                                <p className={styles.formkey}>重新輸入密碼</p>
                                <input className={styles.formvalue} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
    );
}