import { Suspense, useState } from 'react';
import Digital from './Digital/Digital';
import Selected from './Selected/Selected';

const DigitalTool = ({ PromisesData, SelectCard, setSelectCard }) => {
    const [SelectButton, setSelectButton] = useState("Products")
    const [TotalValue, setTotalValue] = useState(0)
    return (
        <>
            <div className="w-11/12 mx-auto ">
                <div className="mt-30 flex flex-col justify-center text-center items-center space-y-4">
                    <h1 className='text-5xl font-black'>Premium Digital Tools</h1>
                    <p className='max-w-137.5'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="join grid grid-cols-2 border-3 border-base-300 p-2 rounded-full gap-1">
                        <button onClick={() => setSelectButton("Products")} className={`join-item btn shadow-none outline-none border-none rounded-full px-7 ${SelectButton === "Products" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "text-black"}`}>Products</button>
                        <button onClick={() => setSelectButton("Cart")} className={`join-item btn shadow-none outline-none border-none rounded-full px-7 ${SelectButton === "Cart" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "text-black"} `}>Cart ({SelectCard.length})</button>
                    </div>
                </div >
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>{SelectButton === "Products" ?
                    <div className="">
                        <Digital setTotalValue={setTotalValue} TotalValue={TotalValue} PromisesData={PromisesData} setSelectCard={setSelectCard} SelectCard={SelectCard}></Digital>
                    </div>
                    : <div className="">
                        <Selected setTotalValue={setTotalValue} TotalValue={TotalValue} SelectCard={SelectCard} setSelectCard={setSelectCard} />
                    </div>
                }</Suspense >
            </div >
        </>
    );
};

export default DigitalTool;