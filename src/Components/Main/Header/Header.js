import React, { useState } from 'react';
import search from '../../assests/search.png';
import notification from '../../assests/notification.png';
import user from '../../assests/user.png';
import cash from '../../assests/cash.png';
import './Header.css'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SideNav from '../SideNav/SideNav'

const Header = ({ toggle, setToggle }) => {
    const handleHamburger = () => {
        setToggle((p) => !p)

    }

    return (
        <div className="container-nav" >
            <SideNav className='container-SideNav' toggle={toggle} setToggle={setToggle} />

            <div className='nav'>
                <div className='container-left'>
                    <MenuOpenIcon className='hamburger' onClick={handleHamburger} />
                    <div className="left-nav">
                        <img src={search} alt="search logo" />
                        <input type="text" placeholder='Enter Product or Keyword...' />
                    </div>
                </div>
                <div className="right-nav"> <div className="notification"> <img src={notification} alt="search logo" />
                    <span className="bell-icon-count"> 3 </span>
                </div> <div className="cash">
                        <p className='font-bold'> ₹ 100.00</p> <img src={cash}
                            alt="search logo" />
                    </div>
                    <div className="user">
                        <p>Hii, <span className='font-bold'>Jhon Doe</span>
                        </p> <img src={user} alt="search logo" /> </div>
                </div>
            </div >
        </div>
    )
}

export default Header