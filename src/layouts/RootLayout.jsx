import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <>
        <header>
            <Navbar/>
        </header>
        <Outlet></Outlet>
        </>
    );
};

export default RootLayout;