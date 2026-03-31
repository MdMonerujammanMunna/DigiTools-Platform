import React from 'react';

const Simple = () => {
    return (
        <div className="py-30 bg-base-100 w-11/12 mx-auto flex justify-center items-center flex-col">
            <div className="text-center space-y-4">
                <h1 className='font-black text-5xl'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* card */}
            <div className="flex flex-col lg:flex-row gap-4 ">
                {/* one */}
                <div className="card w-96 bg-base-300 shadow-md rounded-2xl mt-10">
                    <div className="card-body">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className="">
                            <h2 className='text-[40px]'>$0<span className='text-[20px] text-[#627382]'>/Month</span></h2>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-[#627382] font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>
                {/* two */}
                <div className="card w-96 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md rounded-2xl mt-10">
                    <div className="indicator w-96">
                        <span className="indicator-item indicator-center badge bg-[#FEF3C6] px-3 py-1.5 rounded-full font-bold text-[#BB4D00]">Most Popular</span>
                    </div>
                    <div className="flex items-start justify-start">
                        <div className="card-body ">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Pro</h2>
                                <p className=''>Best for professionals</p>
                            </div>
                            <div className="">
                                <h2 className='text-[40px]'>$29<span className='text-[20px] '>/Month</span></h2>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2  font-medium">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-full text-purple-700 bg-white btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three */}
                <div className="card w-96 bg-base-300 shadow-md rounded-2xl mt-10">
                    <div className="card-body">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <div className="">
                            <h2 className='text-[40px]'>$99<span className='text-[20px] text-[#627382]'>/Month</span></h2>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-[#627382] font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simple;