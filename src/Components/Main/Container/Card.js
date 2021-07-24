import React from 'react'
import './Card.css'
import Eye from '../../assests/Eye.png'
import Bin from '../../assests/bin.png'

const Card = ({ img }) => {

    return (
        <div className='card-container'>
            <img src={img[0]} alt="" />
            <div className='card' >
                <div className="icon-hover">
                    <div></div>
                    <img src={Eye} alt="" />
                </div>
                <div className="icon-hover">
                    <div></div>
                    <img src={Bin} alt="" />
                </div>
            </div>
            <p> {img[1]} </p>
        </div>
    )
}

export default Card


// onMouseOver={() => setVisible({ visibility: 'visible' })} onMouseOut={() => setVisible({ visibility: 'hidden' })}