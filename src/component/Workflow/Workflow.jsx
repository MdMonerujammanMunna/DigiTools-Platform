import React from 'react';

const Workflow = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-30 text-white">
                <h1 className="text-[40px] font-black">Ready to Transform Your Workflow?</h1>
                <p className="pt-4 text-[18px] leading-8 text-center">
                    Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                </p>
                <div className="flex items-center mt-10">
                    <div className="px-4 py-4 rounded-full bg-white mr-4">
                        <button className=" font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]"><a href="#">Explore Products</a>
                        </button>
                    </div>
                    <button className=" font-bold border-2 px-9 py-4 rounded-full">
                        <a href="#">View Pricing</a>
                    </button>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <li className='list-none mr-5'>14-day free trial</li>
                    <li className='mr-5'>No credit card required</li>
                    <li>Cancel anytime</li>
                </div>
            </div >
        </>
    );
};

export default Workflow;