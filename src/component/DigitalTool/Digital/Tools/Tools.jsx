import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Tools = ({ TotalValue, setTotalValue, SingleData, setSelectCard, SelectCard }) => {
    const [ClickIT, setClickIT] = useState(false)
    const ClickHandaler = () => {
        setClickIT(true)
        if (SelectCard.includes(SingleData)) {
            toast.error(`${SingleData.name} card already added`)
            return
        }
        toast.success(`${SingleData.name} Successfully added to your cart!`)
        setTotalValue(TotalValue + SingleData.price)
        setSelectCard([...SelectCard, SingleData])
    }
    return (
        <>
            <div className="card w-96 bg-base-200 shadow-lg rounded-2xl mt-10">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className={`text-[14px] font-medium text-right px-3 p-1.5 rounded-full ${SingleData.tag === "Popular" ? "bg-[#E1E7FF] text-purple-600" : SingleData.tag === "New" ? "bg-[#DBFCE7] text-[#0A883E]" : "bg-[#FEF3C6] text-[#BB4D00]"} `}>{SingleData.tag}</span>
                    </div>
                    <div className="mb-4 p-4 border-3 border-base-300 rounded-full w-15 h-15">
                        <div className="">
                            <img src={SingleData.icon} alt="" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">{SingleData.name}</h2>
                        <p className='text-[#627382]'>{SingleData.description}</p>
                    </div>
                    <div className="">
                        <h2 className='text-[40px] font-bold'>$ {SingleData.price}<span className='text-[20px] font-normal text-[#627382]'>/ {SingleData.period}</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-[#627382] font-medium">
                        <li>{SingleData.features.map((valu, index) => {
                            return (
                                <div key={index} className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>{valu}</p>
                                </div>)
                        })}</li>

                    </ul>
                    <div className="mt-6">
                        <button onClick={() => ClickHandaler()} className={`btn rounded-full text-white ${ClickIT === true ? "bg-success" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"}  btn-block`}>{ClickIT === true ? "Buy" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;