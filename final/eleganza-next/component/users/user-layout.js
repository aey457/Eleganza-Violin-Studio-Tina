import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../default-layout/header';
import Footer from '../default-layout/footer';
import styles from './main.module.scss';
import SideNav from './sidenav';
import Breadcrumb from './breadcrumb';

export default function UserLayout({ children }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shouldRenderSideNav = windowWidth > 768; // Adjust this threshold as needed

    return (
        <>
            <Head>
                <title>User Layout</title>
                <meta name="viewport" content="width=device-width" />
            </Head>
            <Header />
            <Breadcrumb />
            <div className="wrap flex-grow-1">
                <div className={styles['main']}>
                    {/* 條件渲染 SideNav */}
                    {shouldRenderSideNav && <SideNav />}
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </>
    );
}