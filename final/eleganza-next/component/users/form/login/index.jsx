import { useState } from 'react'
import React from 'react'
import styles from './login.module.scss'
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';

export default function LoginForm() {
    // const { login } = useAuth();

    // 解析accessToken用的函式
    const parseJwt = (token) => {
        const base64Payload = token.split('.')[1]
        const payload = Buffer.from(base64Payload, 'base64')
        return JSON.parse(payload.toString())
    }
    const [user, setUser] = useState({
        useremail: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(prevState => !prevState);
    };

    const [errors, setErrors] = useState({
        useremail: '',
        password: '',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newErrors = {
            useremail: '',
            password: ''
        };
    
        if (!user.useremail) {
            newErrors.useremail = '*帳號為必填';
        }
    
        if (!user.password) {
            newErrors.password = '*密碼為必填';
        }
    
        setErrors(newErrors);
    
        if (user.useremail && user.password) {
            try {
                await loginUser(user.useremail, user.password);
            } catch (error) {
                console.error('Error occurred during login:', error);
                alert('登入時發生錯誤');
            }
        }
    };
    
    const loginUser = async (email, password) => {
        try {
            // 發送身份驗證請求
            const response = await fetch('http://localhost:3005/api/home-myaccount/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_email: email,
                    user_password: password
                })
            });
    
            const data = await response.json();
    
            if (data.status === 'success') {
                // 登入成功，將使用者導向 account-center 頁面
                router.push(`/users/account-center/account-center?userId=${data.data.id}`);
                alert('登入成功');
                const returnUser = parseJwt(data.data.accessToken);
                console.log(returnUser);
            } else {
                // 處理登入失敗的情況
                console.error('Login failed');
                alert('登入失敗，請檢查帳號和密碼');
            }
        } catch (error) {
            // 處理錯誤
            console.error('Error occurred during login:', error);
            alert('登入時發生錯誤');
        }
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
                        <form className={styles.formwraps} onSubmit={handleSubmit}>
                            <div className={styles.form}>
                                <label className={styles.formkey}>Email</label>
                                <input className={styles.formvalue} type="text" name="useremail" onChange={handleFieldChange} /> 
                                <span className={styles.error}>{errors.useremail}</span>
                            </div>
                            <div className={styles.form}>
                                <div className={styles.passwordinput}>
                                    <label className={styles.formkey}>密碼</label>
                                    <a href="#" onClick={togglePasswordVisibility}>
                                        <img src="/icons/icon-eye.svg" alt="Toggle Password Visibility" />
                                    </a>
                                </div>
                                <input className={styles.formvalue} type={showPassword ? 'text' : 'password'} name="password" onChange={handleFieldChange} />
                                <span className={styles.error}>{errors.password}</span>
                            </div>
                            <div className={styles.formcheck}>
                                <div className={styles.checkloginstatus}>
                                    <input type="checkbox" />
                                    <p>保持登入狀態</p>
                                </div>
                                <a href="">忘記密碼？</a>
                            </div>
                            <div className={styles.mbtn} onClick={handleSubmit}>
                                <button type="submit" >登入</button>
                            </div>
                        </form>
                        <div className={styles.registeraccount}>
                            <a href="http://localhost:3000/users/user-form/register">註冊帳號</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}