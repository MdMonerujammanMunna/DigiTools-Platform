import React from 'react';
import { toast } from 'react-toastify';

const CardUI = ({ setTotalValue, TotalValue, SelectCard, SelectData, setSelectCard }) => {
    const RemoveTheCard = (SelectData) => {
        const fillterSelectCard = SelectCard.filter(item => item.name != SelectData.name)
        setSelectCard(fillterSelectCard)
        setTotalValue(TotalValue - SelectData.price)
        toast.error(`${SelectData.name} remove successfully`)
    }
    return (
        <>
            <div className="flex items-center justify-between mb-4 rounded-2xl px-6 py-5 bg-base-300">
                <div className="flex items-center gap-4">
                    <div className="p-3 border-3 border-base-300 bg-base-100 rounded-full w-15 h-15">
                        <img src={SelectData.icon} alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-semibold text-2xl'>{SelectData.name}</h1>
                        <span className='text-[#627382]'>${SelectData.price}</span>
                    </div>
                </div>
                <div className=" cursor-pointer">
                    <button className='btn outline-none border-none shadow-none p-0 text-[#FF3980] font-bold bg-base-300' onClick={() => RemoveTheCard(SelectData)}>Remove</button>
                </div>
            </div>
        </>
    );
};

export default CardUI;