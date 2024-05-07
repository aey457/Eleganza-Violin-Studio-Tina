import React from 'react';
import ShoppingCart from '../component/shopping_cart/purchasepagecart';
import Login from '../component/shopping_cart/login';
import useAuth from '../hooks/useAuth'; // 引入狀態管理的 hook

const Index = () => {
  const { isAuthenticated } = useAuth(); // 檢查是否已登入

  return isAuthenticated ? <ShoppingCart /> : <Login />; // 根據登入狀態顯示不同頁面


  // return <ShoppingCart /> ;
};

export default Index;
