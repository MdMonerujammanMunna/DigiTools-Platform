import React from 'react';
import IoPlayOutline from '../../assets/Play.png';
import HeroBannerImages from '../../assets/banner.png';
import HeroIcon from '../../assets/heroIcon.png'
const HeroBanner = () => {
    return (
        <>
            <div className="hero mt-20">
                <div className="hero-content items-center justify-between gap-10 flex-col lg:flex-row-reverse w-11/12" >
                    <img
                        src={HeroBannerImages}
                        className="max-w-md rounded-lg shadow-2xl flex-1"
                    />

                    <div className="">
                        <div className="flex items-center gap-1.5 px-4 py-2 w-75 bg-[#E1E7FF] rounded-full">
                            <img src={HeroIcon} alt="" />
                            <h2 className='font-medium'>New: AI-Powered Tools Available</h2>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-7xl font-black text-[#101727] leading-21">Supercharge Your <br /> Digital Workflow</h1>
                            <p className="py-6 max-w-140 text-[18px] leading-8 text-[#627382]">
                                Access premium AI tools, design assets, templates, and productivity
                                software—all in one place. Start creating faster today.

                                Explore Products
                            </p>
                            <div className="flex items-center">
                                <div className="text-xl">
                                    <button className="px-4 py-3  bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full font-bold"><a href="#">Explore Products</a>
                                    </button></div>
                                <div className="ml-8 rounded-full p-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                                    <div className="px-3.75 py-2.75 rounded-full font-bold bg-white flex items-center gap-2.5 text-xl">
                                        <div className=""><img src={IoPlayOutline} alt="" /></div>
                                        <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">
                                            <a href="#"> Watch Demo</a>
                                        </button>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;