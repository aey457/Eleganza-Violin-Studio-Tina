import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../default-layout/header';
import Footer from '../default-layout/footer';
import styles from './main.module.scss';
import SideNav from './sidenav';
import Breadcrumb from './breadcrumb';

export default function UserLayout({ currentPage, children }) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth); // 初始設置 windowWidth
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // 空的依賴數組以僅在組件掛載時設置一次

    const shouldRenderSideNav = windowWidth > 1024; // 調整閾值

    return (
        <>
            <Head>
                <title>User Layout</title>
                <meta name="viewport" content="width=device-width" />
            </Head>
            <Header />
            <div className= {styles['custom-breadcrumb']} >
                <Breadcrumb currentPage={currentPage}/>
            </div>
                <div className="wrap flex-grow-1">
                    <div className={styles['main']}>
                        {/* 條件渲染 SideNav */}
                        {shouldRenderSideNav && <SideNav />}
                        {children}
                    </div>
                </div>
            

            <Footer />
        </>
    );
}