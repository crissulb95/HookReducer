import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Navbar } from './Navbar';

import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Navbar />

                <div className='container pt-4'>
                    <Switch>
                        <Route path='/about' exact component={ AboutPage } />
                        <Route path='/login' exact component={ LoginPage } />
                        <Route path='/' exact component={ HomePage } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
