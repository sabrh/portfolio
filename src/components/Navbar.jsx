import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
    const links = 
        <>
            <li className='uppercase'><NavLink to='/' className={({ isActive }) => isActive ? 
            'underline  text-primary underline-offset-4 font-bold' : ''}>Home</NavLink></li>

            <li className='uppercase'><NavLink to='/about' className={({ isActive }) => isActive ? 
            'underline text-blue-400 underline-offset-4 font-bold' : ''}>About Me</NavLink></li>
    
            <li className='uppercase'><NavLink to='/skills' className={({ isActive }) => isActive ? 
            'underline  text-blue-400 underline-offset-4 font-bold' : ''}>Skills</NavLink></li>

            <li className='uppercase'><NavLink to='/education' className={({ isActive }) => isActive ? 
            'underline  text-blue-400 underline-offset-4 font-bold' : ''}>Education</NavLink></li>

            <li className='uppercase'><NavLink to='/projects' className={({ isActive }) => isActive ? 
            'underline  text-blue-400 underline-offset-4 font-bold' : ''}>Projects</NavLink></li>

            <li className='uppercase'><NavLink to='/contact' className={({ isActive }) => isActive ? 
            'underline  text-blue-400 underline-offset-4 font-bold' : ''}>Contact</NavLink></li>

        </>

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-base shadow-md z-50 md:px-16">
            {/* LEFT - Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    {links}
                </ul>
            </div>
            <NavLink to='/' className="flex items-center font-extrabold text-2xl text-gray-700 gap-x-1 whitespace-nowrap">
            <img /> Sabrina Haque
            </NavLink>
        </div>

        {/* CENTER - Links */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT - Auth Buttons / User Dropdown */}
        <div className="navbar-end gap-4">
            <button className='btn btn-ghost'>Resume</button>
        </div>
        </div>

    );
};

export default Navbar;