import React from 'react'
import './Main.css'
import ImageLibrary from './ImageLibrary/ImageLibrary'
import DashBoard from './DashBord/DashBoard'
import NewOrders from './NewOrders/NewOrders'
import ManageOrder from './ManageOrder/ManageOrder'
import Billing from './Billing/Billing'
import Setting from './Setting/Setting'

import Header from './Header/Header'
import SideNav from './SideNav/SideNav'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const Main = () => {
    return (
        <div className='main'>
            <SideNav />
            <Header />
            <Switch>
                <Route exact path='/'>
                    <DashBoard />
                </Route>
                <Route path='/imagelibrary'>
                    <ImageLibrary />
                </Route>
                <Route path='/neworder'>
                    <NewOrders />
                </Route>
                <Route path='/manageorder'>
                    <ManageOrder />
                </Route>
                <Route path='/billing'>
                    <Billing />
                </Route>
                <Route path='/setting'>
                    <Setting />
                </Route>
            </Switch>
        </div >
    )
}


export default Main
