import React from 'react'

function CardWrapper({children}) {
    return (
        <div className='card bg-base-200 shadow shadow-amber-50 border border-base-300 p-5'>
            {children}
        </div>
    )
}

export default CardWrapper
