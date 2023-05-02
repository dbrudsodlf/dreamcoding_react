import React, { useState } from 'react';


export default function Counter({total,onClick}) {
    const [count,setCount]=useState(0);
    return (
        <div className='calculate'>
            <p className='num'>{count}
            <span className='total'>/{total}</span></p>
            <button 
                className='btn'
                onClick={()=>{
                setCount((prev)=>prev+1);
                onClick();
                }}>Add + </button>
        </div>
    );
}

