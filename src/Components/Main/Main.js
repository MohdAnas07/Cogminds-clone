import React from 'react'
import './Main.css'
import Container from './ImageLibrary/Container'
import DashBoard from './DashBord/DashBoard'
import NewOrders from './NewOrders/NewOrders'

import Header from './Header/Header'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";


const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <DashBoard />
                    </Route>
                    <Route path="/imagelibrary">
                        <Container />
                    </Route>
                    <Route path="/neworder">
                        <NewOrders />
                    </Route>
                    <Route path="/manageorder">
                        <Container />
                    </Route>
                    <Route path="/setting">
                        <Container />
                    </Route>
                    <Route path="/billing">
                        <Container />
                    </Route>
                </Switch>
            </Router>
        </div >
    )
}

export default Main
