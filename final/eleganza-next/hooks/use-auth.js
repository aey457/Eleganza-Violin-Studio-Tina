import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // 解析accessToken用的函式
  const parseJwt = (token) => {
    const base64Payload = token.split('.')[1]
    const payload = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payload.toString())
  }
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: null,
    token: null,
    isLoggedIn: false,
  })
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = JSON.parse(localStorage.getItem('userData') || '{}')

    if (token) {
      setAuth({
        token: token,
        isLoggedIn: true,
        userData: userData,
        isAuth: true,
      })
    }
  }, [])

  const [user, setUser] = useState({
    useremail: '',
    password: '',
    phone: '',
    name: '',
    account: '',
    newPassword: '',
    newPasswordConfirm: '',
  })

  const login = async (email, password) => {
    try {
      // 发送身份验证请求
      const response = await fetch(
        'http://localhost:3005/api/home-myaccount/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_email: email,
            user_password: password,
          }),
        },
      )

      const data = await response.json()
      console.log(data)

      if (data.status === 'success') {
        // 将 accessToken 存储到 localStorage
        localStorage.setItem('accessToken', data.data.accessToken)
        localStorage.setItem('userId', data.data.userId)

        // 更新用户认证状态和数据
        setAuth({
          token: data.data.accessToken,
          isLoggedIn: true,
          userData: parseJwt(data.data.accessToken),
          isAuth: true,
        })

        console.log(parseJwt(data.data.accessToken))

        // 登录成功，将用户导向 account-center 页面
        router.back
        alert('登入成功')
      } else {
        // 处理登录失败的情况
        console.error('Login failed')
        alert('登入失敗，請檢查帳號和密碼')
      }
    } catch (error) {
      // 处理错误
      console.error('Error occurred during login:', error)
      alert('登录时发生错误')
    }
  }

  const logout = async () => {
    const res = await fetch('http://localhost:3005/api/home-myaccount/logout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`, // 添加授權標頭
      },
      body: JSON.stringify({}),
    })

    const data = await res.json()

    if (data.status === 'success') {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userId')
      setAuth({
        token: null,
        isLoggedIn: false,
        userData: null,
        isAuth: false,
      })
      router.push(`/`)
      alert('登出成功')
    } else {
      alert(data.message)
    }
  }

  const updateProfile = (user) => {
    console.log(user.JSON)
    const storedUserDetails = JSON.parse(localStorage.getItem('userData'))

    const updatedUserData = {
      name: user.username,
      account: user.useraccount,
      phone: user.userphone,
      password: user.newPassword,
    }

    fetch(`http://localhost:3005/api/home-myaccount/${auth.userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`, // 添加授权头部
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Update success:', data)
        console.log('token:', data.data.accessToken)
        setAuth({
          token: data.data.accessToken,
          isLoggedIn: true,
          userData: parseJwt(data.data.accessToken),
          isAuth: true,
        })
      })
      .catch((error) => console.error('Error updating user details:', error))
  }

  const handleCheck = async () => {
    const res = await fetch('http://localhost:3005/api/home-myaccount/check', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    if (data.status === 'success') {
      console.log(data.data)
    } else {
      alert(data.message)
    }
  }

  return (
    <AuthContext.Provider
      value={{ auth, login, logout, updateProfile, handleCheck }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
