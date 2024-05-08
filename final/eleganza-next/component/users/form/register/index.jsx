import React, { useState } from 'react';
import styles from './register.module.scss';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function RegisterForm() {
    const [email, setEmail] = useState(''); // 初始化 email 狀態
    const [phone, setPhone] = useState(''); // 初始化手機號碼狀態
    const [password, setPassword] = useState(''); // 初始化密碼狀態
    const [confirmPassword, setConfirmPassword] = useState(''); // 初始化重新輸入密碼狀態
    const [inputText, setInputText] = useState('')
    const [user, setUser] = useState({
        useremail: '',
        password: '',
        phone: '',
        confirmPassword: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 構造要發送的數據
        const userData = {
            email,
            phone,
            password,
            confirmPassword
        };

        const newErrors = {
            useremail: '',
            password: '',
        }
    
        if (!user.useremail) {
            newErrors.useremail = '帳號為必填'
        }
    
        if (!user.password) {
            newErrors.password = '密碼為必填'
        }
    
        setErrors(newErrors);

        const res = await fetch('http://localhost:3005/api/Eleganza-register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            })

            const data = await res.json()

            console.log(data)
    }
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(prevState => !prevState);
    };

    const [showPassword2, setShowPassword2] = useState(false)
    const togglePasswordVisibility2 = (e) => {
        e.preventDefault();
        setShowPassword2(prevState => !prevState);
    };

    


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
                        <form className={styles.formwraps}  onSubmit={handleSubmit}>
                            <div className={styles.form}>
                                <p className={styles.formkey}>Email</p>
                                <input className={styles.formvalue} type="text" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.form}>
                                <p className={styles.formkey}>手機號碼</p>
                                <input className={styles.formvalue} type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className={styles.form}>
                            <div className={styles.passwordinput}>
                                    <label className={styles.formkey}>密碼</label>
                                    <a href="#" onClick={togglePasswordVisibility}>
                                        <img src="/icons/icon-eye.svg" alt="Toggle Password Visibility" />
                                    </a>
                                </div>
                                <input className={styles.formvalue} type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <PasswordStrengthBar password={password} />
                            </div>
                            <div className={styles.form}>
                                <div className={styles.passwordinput}>
                                        <label className={styles.formkey}>重新輸入密碼</label>
                                        <a href="#" onClick={togglePasswordVisibility2}>
                                            <img src="/icons/icon-eye.svg" alt="Toggle Password Visibility" />
                                        </a>
                                </div>
                                <input className={styles.formvalue} type={showPassword2 ? 'text' : 'password'} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className={styles.formcheck}>
                                <div className={styles.checkloginstatus}>
                                    <input type="checkbox" />
                                    <p>保持登入狀態</p>
                                </div>
                                <a href="">忘記密碼？</a>
                            </div>
                            <div className={styles.mbtn}>
                                <button type="submit">註冊</button>
                            </div>
                        </form>
                        <div className={styles.registeraccount}>
                            <p>已有帳號了嗎？</p>
                            <a href="http://localhost:3000/users/user-form/login">由此登入</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}