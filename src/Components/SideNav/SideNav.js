import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../assests/company_logo.png'
import Image from '../assests/image.png'
import Dashboard from '../assests/Dashboard.png'
import Billing from '../assests/billing.png'
import Setting from '../assests/setting.png'
import Neworder from '../assests/neworder.png'
import Manageorder from '../assests/orderlist.png'
import ListItem from './ListItem'

const styleNav = {
    'background-color': '#fc6101',
    color: 'white',
    'border-radius': '30px 0px 0px 30px'
}

const imgIcon = [['Dashboard', Dashboard, {}], ['Image Library', Image, styleNav], ['New Order', Neworder, {}], ['Manage Order', Manageorder, {}], ['Setting', Setting, {}], ['Billing', Billing, {}]]



const SideNav = () => {
    const [showSlide, setShowSlide] = useState({})
    console.log(showSlide);

    const hoverIn = () => {
        setShowSlide({ width: '288px' })
    }

    const hoverOut = () => {
        setShowSlide({ width: '90px' })
    }

    return (
        <div onMouseOver={hoverIn} onMouseOut={hoverOut} style={showSlide} className='side-var'>
            <div className='company-logo'>
                <img src={Logo} alt="company logo" />
                <p onClick={() => setShowSlide({ width: '90px' })}>X</p>
            </div >
            {
                imgIcon.map((img, index) => (
                    <ListItem key={index} img={img} />
                ))
            }
        </div>
    )
}

export default SideNav


