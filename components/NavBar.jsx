import React from 'react';
import Image from 'next/image'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={`fixed top-0 w-full flex items-center justify-between bg-black text-white py-4 px-8 z-50 ${styles.navFont}`} style={{height: '150px'}} >
            <div className="logo font-bold">
                <Image src='/assets/vica-logo-nobackground.png' width={120} height={100} alt='vica logo' />
            </div>
            <div className="menu flex gap-4">
                <a href="#tech-pm" className="text-2xl px-4 font-bold hover:text-gray-400 transition-colors duration-150">Tech PM</a>
                <a href="#saas" className="text-2xl px-4 font-bold hover:text-gray-400 transition-colors duration-150">SaaS</a>
                <a href="#contact" className="text-2xl px-4 font-bold hover:text-gray-400 transition-colors duration-150">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
