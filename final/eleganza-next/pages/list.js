import { useState, useEffect } from 'react'
import LessonCollectionCard2 from '@/component/users/cards/lessoncollection/indexcopy.jsx';
// 2.使用範例資料
// 範例資料來源: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 先註解大概json的資料模型樣貌
// const data = [
//   {
//     id: '1',
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   },
// ]

// 連至 /product/list 資料夾的路由
export default function List() {
  // 商品要使用的狀態，物件陣列狀態初始化值會需要至少空陣列
  // !!注意!! 初次render(渲染)會使用初始值
  // !!注意!! 在應用程式執行過程中，務必要保持狀態維持同樣的資料類型
  const [lessons, setLessons] = useState([])

  // 與伺服器要求獲取資料的async函式
  const getLessons = async () => {
    const url = 'http://localhost:3005/api/my-lessoncollection/lessoncollection/1';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    if (Array.isArray(data.collections)) {
      setLessons(data.collections);
    } else {
      console.error('Collections data is not an array:', data.collections);
    }
  };
  // 樣式2: didMount階段只執行一次
  useEffect(() => {
    // 頁面初次渲染之後伺服器要求資料
    getLessons()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        
        {lessons.map((v, i) => {   
          return (<li key={v.user_id}> {v.course_name}/{v.course_price}/{v.course_teacher_name}</li>)
        })}
      </ul>
      <LessonCollectionCard2/>
    </>
    
  )
}