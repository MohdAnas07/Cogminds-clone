import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../../assests/company_logo.png'
import { NavLink } from 'react-router-dom'

// ICONS 
import DashboardIcon from '@material-ui/icons/Dashboard'; //dashboard
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'; //imagelibry
import AddBoxIcon from '@material-ui/icons/AddBox';  //new order
import FileCopyIcon from '@material-ui/icons/FileCopy'; //manageorder
import TuneIcon from '@material-ui/icons/Tune'; //setting
import ReceiptIcon from '@material-ui/icons/Receipt'; //billing


const SideNav = () => {

    const [showSlide, setShowSlide] = useState({})
    const [transform, setTransform] = useState({ transform: 'scale(0)' })
    const [marginLeft, setMarginLeft] = useState(null)

    const hoverIn = () => {
        setShowSlide({ width: '288px' })
        setTransform({ transform: 'scale(1)' })
        setMarginLeft({ marginLeft: '34px' })
    }

    const hoverOut = () => {
        setShowSlide({ width: '75px' })
        setTransform({ transform: 'scale(0)' })
        setMarginLeft({ marginLeft: '8px' })

    }

    return (
        <div onMouseOver={hoverIn} onMouseOut={hoverOut} style={showSlide} className='side-var'>
            <div className='company-logo'>
                <img src={Logo} alt="company logo" id='logo' />
                <p onClick={() => setShowSlide({ width: '75px' })}>X</p>
            </div >

            <>
                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='1' exact to='/' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <DashboardIcon className='Icon' />
                    <p style={transform} >Dashboard</p>
                </NavLink>

                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='2' exact to='/imagelibrary' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <InsertPhotoIcon className='Icon' />
                    <p style={transform} >Image Library</p>
                </NavLink>

                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='3' exact to='/neworder' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <AddBoxIcon className='Icon' />
                    <p style={transform} >New Order</p>
                </NavLink>

                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='4' exact to='/manageorder' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <FileCopyIcon className='Icon' />
                    <p style={transform} >Manage Order</p>
                </NavLink>

                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='5' exact to='/setting' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <TuneIcon className='Icon' />
                    <p style={transform} >Setting</p>
                </NavLink>

                <NavLink style={marginLeft} activeClassName='activeLink' className=' listItem' key='6' exact to='/billing' >
                    <b className='uperBox'></b>
                    <b className='lowerBox'></b>
                    <ReceiptIcon className=' Icon' />
                    <p style={transform} >Billing</p>
                </NavLink>
            </>

        </div>
    )
}

export default SideNav
