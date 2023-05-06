import React from 'react';

export default function Avatar({isNew,image}) {
    return (
        <div className='avatar'>
        {isNew&&<p className='new'>NEW</p>}
        <img className='photo'src={image} alt="avatar" />
        </div>
    );
}

