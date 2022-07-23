import React from 'react'
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout;
