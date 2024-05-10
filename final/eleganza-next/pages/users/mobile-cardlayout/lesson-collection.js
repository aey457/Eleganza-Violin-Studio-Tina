import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from './mobile-cardlayout.module.css';
import LessonCollectionCard from '@/component/users/cards/lessoncollection';
import UserLayout from '@/component/users/user-layout';

export default function LessonCollection({lessonId=201}) {
  const [lessonDetails, setLessonDetails] = useState(null);
    const [lessoncollections, setlessoncollections] = useState([])
 
   useEffect(() => {
     // 向後端 API 端點發送請求獲取使用者資料
     fetch(`http://localhost:3005/api/my-lessoncollection/${lessonId}`)
       .then((response) => response.json())
       .then((data) => {
         setLessonDetails(data.lessonDetails);
       })
       .catch((error) => console.error('Error fetching lesson details:', error));
   }, [lessonId]); 
   
   return (
      <>
  <div className={styles['mainarea-desktop-collection']}>
    <LessonCollectionCard/>
    <LessonCollectionCard/>
    <LessonCollectionCard/>
  </div>
  <div className={styles['lesson-mobile']} >
    <div className={styles['btn-mobile']} >
      <div className={styles['sbtn-selected']} >
        <a href="">商品收藏</a>
      </div>
      <div className={styles['sbtn']}>
        <a href="">課程收藏</a>
      </div>
    </div>
    <LessonCollectionCard/>
    <LessonCollectionCard/>
    <LessonCollectionCard/>
  </div>
</>

   
   );
}

LessonCollection.getLayout = function (page) {
   return <UserLayout currentPage="收藏內容">{page}</UserLayout>;
};



   
      
      