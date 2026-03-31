import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
    return (
        <>
            <footer className=" text-white  pt-25 px-25 bg-[#101727]">
                <div className='footer sm:footer-horizontal'>
                    <aside>
                        <h1 className='font-bold text-4xl mb-4'> DigiTools</h1>
                        <p className='max-w-75 leading-6 opacity-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title text-xl opacity-100 font-medium normal-case">Product</h6>
                        <a className="link link-hover opacity-70">Features</a>
                        <a className="link link-hover opacity-70">Pricing</a>
                        <a className="link link-hover opacity-70">Templates</a>
                        <a className="link link-hover opacity-70">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl opacity-100 font-medium normal-case">Company</h6>
                        <a className="link link-hover opacity-70">About</a>
                        <a className="link link-hover opacity-70">Contact</a>
                        <a className="link link-hover opacity-70">Careers</a>
                        <a className="link link-hover opacity-70">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl opacity-100 font-medium normal-case">Resources</h6>
                        <a className="link link-hover opacity-70">Documentation</a>
                        <a className="link link-hover opacity-70">Help Center</a>
                        <a className="link link-hover opacity-70">Community</a>
                        <a className="link link-hover opacity-70">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl opacity-100 font-medium normal-case">Social Links</h6>
                        <div className="flex items-center justify-between gap-3">
                            <div className="p-2.5 bg-white rounded-full hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-black hover:text-white">
                                <AiFillInstagram className='text-xl' />
                            </div>
                            <div className="p-2.5 bg-white rounded-full hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-black hover:text-white">
                                <FaFacebookSquare className='text-xl' />
                            </div>
                            <div className="p-2.5 bg-white rounded-full hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-black hover:text-white">
                                <RiTwitterXLine className='text-xl' />
                            </div>
                        </div>
                    </nav></div>

                <div className="mt-20 opacity-45">
                    <hr className='border-[#E5E7EB] border-.5' />
                    <div className="lg:flex items-center justify-between space-y-8 lg:space-y-0 text-[#FAFAFA] py-7.5">
                        <div className="">
                            <p>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className="lg:flex items-center gap-5">
                            <p><a href="">Privacy Policy</a></p>
                            <p><a href="">Cookies</a></p>
                            <p><a href="">Terms of Service</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </ >
    );
};

export default Footer;