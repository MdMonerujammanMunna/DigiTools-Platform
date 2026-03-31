import React from 'react';
import ProfileLogo from '../../assets/user.png';
const Steps = () => {
    return (
        <>
            <div className="py-30 bg-base-300">
                <div className="text-center space-y-4">
                    <h1 className='font-black text-5xl'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="lg:flex items-center justify-between space-y-12 lg:space-y-0 mx-20 mt-10">
                    {/* One */}
                    <div className="bg-base-100 max-w-sm p-5 border-2 border-[#F1F1F1] rounded-2xl ">
                        <div className="flex justify-end">
                            <span className='text-right text-[14px] font-bold px-3 py-2.5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white'>01</span>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center">
                            <div className="mb-4 p-4 bg-linear-to-r from-[#4f39f615] to-[#9514fa15] rounded-full w-15 h-15">
                                <div className="">
                                    <img src={"https://i.ibb.co.com/0p9t2964/user.png "} alt="" />
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl mb-4'>Create Account</h1>
                            <p className='max-w-82.5 mb-16'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    {/* two */}
                    <div className="bg-base-100 max-w-sm p-5 border-2 border-[#F1F1F1] rounded-2xl ">
                        <div className="flex justify-end">
                            <span className='text-right text-[14px] font-bold px-3 py-2.5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white'>02</span>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center">
                            <div className="mb-4 p-4 bg-linear-to-r from-[#4f39f615] to-[#9514fa15] rounded-full w-15 h-15">
                                <div className="">
                                    <img src={"https://i.ibb.co.com/SwMPJN8H/package.png"} alt="" />
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl mb-4'>Choose Products</h1>
                            <p className='max-w-82.5 mb-16'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    {/* three */}
                    <div className="bg-base-100 max-w-sm p-5 border-2 border-[#F1F1F1] rounded-2xl ">
                        <div className="flex justify-end">
                            <span className='text-right text-[14px] font-bold px-3 py-2.5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white'>03</span>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center">
                            <div className="mb-4 p-4 bg-linear-to-r from-[#4f39f615] to-[#9514fa15] rounded-full w-15 h-15">
                                <div className="">
                                    <img src={"https://i.ibb.co.com/VpYxZxX6/rocket.png"} alt="" />
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl mb-4'>Start Creating</h1>
                            <p className='max-w-82.5 mb-16'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steps;