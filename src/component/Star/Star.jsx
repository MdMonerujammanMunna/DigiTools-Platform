import React from 'react';

const Star = () => {
    return (
        <>
            <div className=' shadow bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-10 mt-15'>
                <div className="w-11/12 mx-auto stats stats-vertical lg:stats-horizontal text-white">
                    <div className="stat text-center border-none">
                        <div className="stat-value font-bold text-6xl ">50K+</div>
                        <div className="stat-title text-white font-medium text-2xl mt-3">Active Users</div>
                    </div>

                    <div className="stat  text-center border-none">
                        <div className="stat-value font-bold text-6xl">200+</div>
                        <div className="stat-title text-white font-medium text-2xl mt-3">Premium Tools</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-value font-bold text-6xl">4.9</div>
                        <div className="stat-title text-white font-medium text-2xl mt-3">Rating</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Star;