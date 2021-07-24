import React from 'react';
import search from '../assests/search.png';
import notification from '../assests/notification.png';
import user from '../assests/user.png';
import cash from '../assests/cash.png';
import './Header.css'


const Header = () => {
    return (
        <div className='nav'>
            <div className="left-nav">
                <img src={search} alt="search logo" />
                <input type="text" placeholder='Enter Product or Keyword...' />
            </div>
            <div className="right-nav">
                <div className="notification">
                    <img src={notification} alt="search logo" />
                    <span className="bell-icon-count">
                        3
                    </span>
                </div>
                <div className="cash">
                    <p className='font-bold'> ₹ 100.00</p>
                    <img src={cash} alt="search logo" />
                </div>
                <div className="user">
                    <p>Hii,<span className='font-bold'>Jhon Doe</span> </p>
                    <img src={user} alt="search logo" />
                </div>
            </div>

        </div >
    )
}

export default Header
