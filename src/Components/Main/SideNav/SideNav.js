import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../../assests/company_logo.png'
import Image from '../../assests/image.png'
import Dashboard from '../../assests/Dashboard.png'
import Billing from '../../assests/billing.png'
import Setting from '../../assests/setting.png'
import Neworder from '../../assests/neworder.png'
import Manageorder from '../../assests/orderlist.png'
import ListItem from './ListItem'
import { NavLink } from 'react-router-dom'

const SideNav = () => {

    const [showSlide, setShowSlide] = useState({})
    const [transform, setTransform] = useState({ transform: 'scale(0)' })

    const ListData = [['Dashboard', Dashboard, transform], ['Image Library', Image, transform], ['New Order', Neworder, transform, '/neworder'], ['Manage Order', Manageorder, transform, '/manageorder'], ['Setting', Setting, transform, '/setting'], ['Billing', Billing, transform, '/billing']]

    const hoverIn = () => {
        setShowSlide({ width: '288px' })
        setTransform({ transform: 'scale(1)' })
    }

    const hoverOut = () => {
        setShowSlide({ width: '90px' })
        setTransform({ transform: 'scale(0)' })
    }

    return (
        <div onMouseOver={hoverIn} onMouseOut={hoverOut} style={showSlide} className='side-var'>
            <div className='company-logo'>
                <img src={Logo} alt="company logo" id='logo' />
                <p onClick={() => setShowSlide({ width: '90px' })}>X</p>
            </div >

            <div>
                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='1' to='/' >
                    <ListItem data={ListData[0]} />
                </NavLink>

                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='2' to='/imagelibrary' >
                    <ListItem data={ListData[1]} />
                </NavLink>

                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='3' to='/neworder' >
                    <ListItem data={ListData[2]} />
                </NavLink>

                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='4' to='/manageorder' >
                    <ListItem data={ListData[3]} />
                </NavLink>
                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='5' to='/setting' >
                    <ListItem data={ListData[4]} />
                </NavLink>
                <NavLink activeClassName='styleNav' className='navLinks activeLink' key='6' to='/billing' >
                    <ListItem data={ListData[5]} />
                </NavLink>
            </div>

        </div>
    )
}


export default SideNav
