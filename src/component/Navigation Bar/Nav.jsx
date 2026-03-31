import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Nav = ({ SelectCard }) => {

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                            <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Products</a></li>
                            <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Features</a></li>
                            <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Pricing</a></li>
                            <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Testimonials</a></li>
                            <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn outline-none shadow-none border-none font-black text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-[#101727]">
                        <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Products</a></li>
                        <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Features</a></li>
                        <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Pricing</a></li>
                        <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>Testimonials</a></li>
                        <li className='hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-transparent hover:bg-clip-text'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="indicator">
                        <span className={`indicator-item indicator-top indicator-end badge ${SelectCard.length > 0 ? "bg-red-500 text-white font-semibold " : "hidden"} outline-none border-none p-1`}>{SelectCard.length}</span>
                        <a>  <FiShoppingCart className='font-bold' /></a>
                    </div>
                    <div className='font-semibold text-[#101727] flex items-center gap-8'>
                        <p><a href=''>LogIn</a></p>
                        <p className='px-4 py-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full'><a href=''>Get Started</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;