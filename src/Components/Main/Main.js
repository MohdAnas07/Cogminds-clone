import React from 'react'
import './Main.css'
import ImageLibrary from './ImageLibrary/ImageLibrary'
import DashBoard from './DashBord/DashBoard'
import NewOrders from './NewOrders/NewOrders'
import ManageOrder from './ManageOrder/ManageOrder'
import Billing from './Billing/Billing'
import Setting from './Setting/Setting'

import Header from './Header/Header'

import { Switch, Route } from "react-router-dom";

const Main = ({ toggle, setToggle }) => {

    console.log(setToggle);
    return (
        <div className='main'>
            <Header toggle={toggle} setToggle={setToggle} />

            <Switch>
                <Route exact path='/' component={DashBoard} />
                <Route path='/imagelibrary' component={ImageLibrary} />
                <Route path='/neworder' component={NewOrders} />
                <Route path='/manageorder' component={ManageOrder} />
                <Route path='/billing' component={Billing} />
                <Route path='/setting' component={Setting} />
            </Switch>
        </div >
    )
}


export default Main
