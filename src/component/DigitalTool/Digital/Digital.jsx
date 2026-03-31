import React from 'react';
import Tools from './Tools/Tools';

const Digital = ({ TotalValue, setTotalValue, PromisesData, setSelectCard, SelectCard }) => {
    // console.log(PromisesData)
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto  mb-30">
                {
                    PromisesData.map(SingleData => <Tools key={SingleData.id} TotalValue={TotalValue} setTotalValue={setTotalValue} SingleData={SingleData} setSelectCard={setSelectCard} SelectCard={SelectCard} />)
                }</div>
        </>
    );
};

export default Digital;