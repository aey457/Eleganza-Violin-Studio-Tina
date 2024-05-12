import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: null,
    token: null,
    isLoggedIn: false,
    userData: {},
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    if (token) {
      setAuth({
        token: token,
        isLoggedIn: true,
        userData: userData,
      });
    }
  }, []);

  const login = async (email, password) => {
    try {
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

      if (response.ok) {
        const data = await response.json();
        const userId = data.userId;

        const userDataResponse = await fetch(`http://localhost:3005/api/home-myaccount/${userId}`);
        if (userDataResponse.ok) {
          const userData = await userDataResponse.json();

          setAuth({
            token: data.accessToken,
            isLoggedIn: true,
            userData: userData
          });

          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('userData', JSON.stringify(userData));

          router.back();
        } else {
          console.error('Failed to fetch user data:', userDataResponse.statusText);
        }
      } else {
        console.error('Login failed');
        alert('登入失敗，請檢查帳號和密碼');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      throw new Error('Error occurred during login:', error);
    }
  };

  const logout = async () => {
    if (auth.token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      setAuth({ token: null, isLoggedIn: false, userData: null });

      const res = await fetch('http://localhost:3005/home-myaccount/logout', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();

      if (data.status === 'success') {
        alert('登出成功');
        router.back();
      } else {
        alert(data.message);
      }
    } else {
      console.log("已登出");
    }
  };

  const handleCheck = async () => {
    const res = await fetch('http://localhost:3005/api/home-myaccount/check', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.status === 'success') {
      console.log(data.data);
    } else {
      alert(data.message);
    }
  };

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const response = await fetch(`http://localhost:3005/api/home-myaccount/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setAuth({
            isAuth: true,
            userData,
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    const { userId } = router.query;
    if (userId) {
      fetchUserData(userId);
    }
  }, [router.query]);

  // 全局认证状态
  useEffect(() => {
    if (auth.token) {
      setAuth((prevAuth) => ({ ...prevAuth, isAuth: true }));
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{ auth, login, logout, handleCheck }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);