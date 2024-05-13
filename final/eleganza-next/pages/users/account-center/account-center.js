import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './account-center.module.css'
import UserLayout from '@/component/users/user-layout'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function AccountCenter() {
  const [userDetails, setUserDetails] = useState(null)
  const router = useRouter()
  const { auth, updateProfile } = useAuth()
  const userId = auth?.userData?.id

  const [user, setUser] = useState({
    useremail: '',
    password: '',
    phone: '',
    name: '',
    account: '',
    newPassword: '',
    newPasswordConfirm: '',
  })
  const [errors, setErrors] = useState({
    useremail: '',
    password: '',
    phone: '',
    name: '',
    account: '',
    newPassword: '',
    newPasswordConfirm: '',
  })

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    const storedAccessToken = localStorage.getItem('accessToken')

    // 如果存在存储的 userId，则发送请求获取用户数据
    if (storedUserId && storedAccessToken) {
      fetch(`http://localhost:3005/api/home-myaccount/${storedUserId}`, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data.userDetails)
          setUser(data.userDetails)
        })
        .catch((error) => console.error('Error fetching user details:', error))
    }
  }, [])

  const handleFieldChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    let hasErrors = false
    const { password, newPassword, newPasswordConfirm } = user
    const newErrors = { password: '', newPassword: '', newPasswordConfirm: '' }

    if (password === newPassword) {
      newErrors.password = '舊密碼與新密碼不可一致'
      newErrors.newPassword = '舊密碼與新密碼不可一致'
      hasErrors = true
    }

    if (newPassword !== newPasswordConfirm) {
      newErrors.newPassword = '密碼與確認密碼需要一致'
      newErrors.newPasswordConfirm = '密碼與確認密碼需要一致'
      hasErrors = true
    }

    if (!password) {
      newErrors.password = '*密碼為必填'
      hasErrors = true
    }

    if (!newPasswordConfirm) {
      newErrors.newPasswordConfirm = '*確認密碼為必填'
      hasErrors = true
    }

    setErrors(newErrors)

    if (hasErrors) {
      return
    }

    updateProfile(user)
  }

  return (
    <>
      <div className={styles['main']}>
        <div className={styles['mainarea-desktop']}>
          <div>
            <form onSubmit={handleSubmit}>
              <p className={styles['maintitle']}>帳號細節</p>
              <div className={styles['formdetail']}>
                <div className={styles['formkey']}>
                  <p>帳號名稱</p>
                  <p>手機號碼</p>
                </div>
                <div className={styles['formvalue']}>
                  <p>{userDetails?.user_email}</p>
                  <p>{userDetails?.user_phone}</p>
                </div>
              </div>
              <div>
                <p className={styles['maintitle']}>個人檔案</p>
                <div className={styles['formdetail']}>
                  <div className={styles['formkey']}>
                    <p>姓名</p>
                    <p>手機號碼</p>
                    <p>顯示名稱</p>
                  </div>
                  <div className={styles['formvalue']}>
                    <input
                      className={styles['formstyle']}
                      type="text"
                      placeholder={userDetails?.user_name}
                      name="name"
                      value={user.name}
                      onChange={handleFieldChange}
                    />
                    <input
                      className={styles['formstyle']}
                      type="text"
                      placeholder={userDetails?.user_phone}
                      name="phone"
                      value={user.phone}
                      onChange={handleFieldChange}
                    />
                    <input
                      className={styles['formstyle']}
                      type="text"
                      placeholder={userDetails?.user_account}
                      name="account"
                      value={user.account}
                      onChange={handleFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className={styles['maintitle']}>變更密碼</p>
                <div className={styles['formdetail']}>
                  <div className={styles['formkey']}>
                    <p>舊密碼</p>
                    <p>新密碼</p>
                    <p>密碼確認</p>
                  </div>
                  <div className={styles['formvalue']}>
                    <input
                      className={styles['formstyle']}
                      type="password"
                      placeholder="舊密碼"
                      name="password"
                      value={user.password}
                      onChange={handleFieldChange}
                    />
                    <input
                      className={styles['formstyle']}
                      type="password"
                      placeholder="不可與舊密碼相同"
                      name="newPassword"
                      value={user.newPassword}
                      onChange={handleFieldChange}
                    />
                    <input
                      className={styles['formstyle']}
                      type="password"
                      placeholder="確認新密碼"
                      name="newPasswordConfirm"
                      value={user.newPasswordConfirm}
                      onChange={handleFieldChange}
                    />
                    <div className={styles['xsbtn']}>
                      <button
                        type="submit"
                        //onClick={(e) => updateProfile(e, user)}
                      >
                        儲存
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles['mainarea-mobile']}>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                marginBottom: 20,
                width: '100%',
                borderBottom: '0.5px solid var(--color-primary-medium)',
              }}
            >
              <p>{userDetails?.user_account}</p>
            </div>
            <p className={styles['maintitle']}>帳號細節</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>帳號名稱</p>
                <p>手機號碼</p>
              </div>
              <div className={styles['formvalue']}>
                <p>{userDetails?.user_email}</p>
                <p>{userDetails?.user_phone}</p>
              </div>
            </div>
            <p className={styles['maintitle']}>個人檔案</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>姓名</p>
                <p>手機號碼</p>
                <p>顯示名稱</p>
              </div>
              <div className={styles['formvalue']}>
                <input
                  className={styles['formstyle']}
                  type="text"
                  placeholder={userDetails?.user_name}
                  name="name"
                  value={user.name}
                  onChange={handleFieldChange}
                />
                <input
                  className={styles['formstyle']}
                  type="text"
                  placeholder={userDetails?.user_phone}
                  name="phone"
                  value={user.phone}
                  onChange={handleFieldChange}
                />
                <input
                  className={styles['formstyle']}
                  type="text"
                  placeholder={userDetails?.user_account}
                  name="account"
                  value={user.account}
                  onChange={handleFieldChange}
                />
              </div>
            </div>
            <p className={styles['maintitle']}>變更密碼</p>
            <div className={styles['formdetail']}>
              <div className={styles['formkey']}>
                <p>舊密碼</p>
                <p>新密碼</p>
                <p>密碼確認</p>
              </div>
              <div className={styles['formvalue']}>
                <input
                  className={styles['formstyle']}
                  type="password"
                  placeholder={userDetails?.user_password}
                  name="password"
                  value={user.password}
                  onChange={handleFieldChange}
                />
                <input
                  className={styles['formstyle']}
                  type="password"
                  placeholder="新密碼"
                  name="newPassword"
                  value={user.newPassword}
                  onChange={handleFieldChange}
                />
                <input
                  className={styles['formstyle']}
                  type="password"
                  placeholder="確認密碼"
                  name="newPasswordConfirm"
                  value={user.newPasswordConfirm}
                  onChange={handleFieldChange}
                />
              </div>
            </div>
            <div className={styles['xsbtn']}>
              <button
                type="submit"
                //onClick={(e) => updateProfile(e, user)}
              >
                儲存
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

AccountCenter.getLayout = function (page) {
  return <UserLayout currentPage="我的帳號">{page}</UserLayout>
}
