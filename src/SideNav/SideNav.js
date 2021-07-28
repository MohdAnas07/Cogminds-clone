import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../Components/assests/company_logo.png'
import Image from '../Components/assests/image.png'
import Dashboard from '../Components/assests/Dashboard.png'
import Billing from '../Components/assests/billing.png'
import Setting from '../Components/assests/setting.png'
import Neworder from '../Components/assests/neworder.png'
import Manageorder from '../Components/assests/orderlist.png'
import ListItem from './ListItem'
import { Link } from 'react-router-dom'

const styleNav = {
    'background-color': '#fc6101',
    color: 'white',
    'border-radius': '30px 0px 0px 30px'
}

const SideNav = () => {

    const [showSlide, setShowSlide] = useState({})
    const [transform, setTransform] = useState({ transform: 'scale(0)' })

    const ListData = [['Dashboard', Dashboard, {}, transform, '/'], ['Image Library', Image, {}, transform, '/imagelibrary'], ['New Order', Neworder, styleNav, transform, '/neworder'], ['Manage Order', Manageorder, {}, transform, '/manageorder'], ['Setting', Setting, {}, transform, '/setting'], ['Billing', Billing, {}, transform, '/billing']]

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
                    // <Link to={data[4]}>
                    <ListItem key={index} data={data} onClick={() => console.log(index)} />
                    // </Link>
                ))
            }
        </div>
    )
}

export default SideNav


