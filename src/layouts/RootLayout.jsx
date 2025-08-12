import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const RootLayout = () => {
    return (
        <>
        <header>
            <Navbar/>
        </header>
        <main className='px-8 md:px-12 bg-[#111b29]'>
            <Outlet></Outlet>
        </main>
        </>
    );
};

export default RootLayout;