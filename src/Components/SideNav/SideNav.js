import React, { useState, useEffect } from 'react'
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


const SideNav = () => {

    const [showSlide, setShowSlide] = useState({})
    const [transform, setTransform] = useState({ transform: 'scale(0)' })

    const ListData = [['Dashboard', Dashboard, {}, transform], ['Image Library', Image, styleNav, transform], ['New Order', Neworder, {}, transform], ['Manage Order', Manageorder, {}, transform], ['Setting', Setting, {}, transform], ['Billing', Billing, {}, transform]]

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
            {
                ListData.map((data, index) => (
                    <ListItem key={index} data={data} />
                ))
            }
        </div>
    )
}

export default SideNav


