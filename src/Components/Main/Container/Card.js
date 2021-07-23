import React from 'react'
import './Card.css'
import Eye from '../../assests/Eye.png'
import Bin from '../../assests/bin.png'

const Card = ({ img }) => {

    return (
        <div className='card-container'>
            <img src={img[0]} alt="" />
            <div className='card' >
                <img src={Eye} alt="" />
                <img src={Bin} alt="" />
            </div>
            <p> {img[1]} </p>
        </div>
    )
}

export default Card


// onMouseOver={() => setVisible({ visibility: 'visible' })} onMouseOut={() => setVisible({ visibility: 'hidden' })}