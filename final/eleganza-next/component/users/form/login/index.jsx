import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import React from 'react'
import styles from './login.module.scss'

export default function LoginForm() {
    const [user, setUser] = useState({
        useremail: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false)

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
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
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

        // if (Object.values(newErrors).every((v) => !v)) {
        //     // 導航到目標頁面
        //     history.push('/users/account-center/account-center');
        // }
    }

    // if (Object.values(newErrors).some((v) => v)) {
    //     setErrors(newErrors);
    //     return;
    // } else {
    //     setErrors({
    //         useremail: '',
    //         password: '',
    //     });
    // }
    
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
                                <br />
                                <span className="error">{errors.useremail}</span>
                                <br />
                            </div>
                            <div className={styles.form}>
                                <div className={styles.passwordinput}>
                                    <label className={styles.formkey}>密碼</label>
                                    <a href="#" onClick={togglePasswordVisibility}>
                                        <img src="/icons/icon-eye.svg" alt="Toggle Password Visibility" />
                                    </a>
                                </div>
                                <input className={styles.formvalue} type={showPassword ? 'text' : 'password'} name="password" onChange={handleFieldChange} />
                                <br />
                                <span className="error">{errors.password}</span>
                                <br />
                            </div>
                            <div className={styles.formcheck}>
                                <div className={styles.checkloginstatus}>
                                    <input type="checkbox" />
                                    <p>保持登入狀態</p>
                                </div>
                                <a href="">忘記密碼？</a>
                            </div>
                            <div className={styles.mbtn}>
                                <button type="submit">登入</button>
                            </div>
                        </form>
                        <div className={styles.registeraccount}>
                            <a href="http://localhost:3000/users/user-form/register">註冊帳號</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}