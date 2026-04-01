import React from 'react';
import CardUI from './CardUI/CardUI';
import { LuShoppingCart } from "react-icons/lu";
import { toast } from 'react-toastify';
const Selected = ({ setTotalValue, TotalValue, SelectCard, setSelectCard }) => {
    const HandalePayment = () => {
        setSelectCard([])
        toast.success(`$${TotalValue} payment successful`)
        setTotalValue(0)
    }
    return (

        <div className="card  bg-base-100 card-md shadow-sm my-30">
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">Your Cart</h2>

                {
                    SelectCard.length === 0 ? <>

                        {/* emty code */}
                        <div className="py-10 flex flex-col justify-center items-center">
                            <LuShoppingCart className='text-8xl text-[#b7b7b7]' />
                            <h1 className='mt-3 text-xl font-medium text-center text-[#b7b7b7]'>your cart is empty</h1>
                        </div>

                    </> : <>
                        {/* Selected cade */}
                        <div className="">
                            <div className="">
                                {SelectCard.map((SelectData, index) => <CardUI key={index} TotalValue={TotalValue} setTotalValue={setTotalValue} SelectCard={SelectCard} SelectData={SelectData} setSelectCard={setSelectCard}></CardUI>)}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <p>Total:-</p>
                                <span className='font-bold text-2xl'>${TotalValue}</span>
                            </div>
                            <div className="">
                                <button onClick={() => HandalePayment()} className="btn btn-primary w-full rounded-full">Proceed to Checkout</button>
                            </div>
                        </div>
                    </>
                }






            </div >
        </div >



    );
};

export default Selected;