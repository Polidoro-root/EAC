import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserIndex from './pages/UserIndex';
import UserProfile from './pages/UserProfile';
import CompanyLogin from './pages/CompanyLogin';
import CompanyRegister from './pages/CompanyRegister';
import CompanyIndex from './pages/CompanyIndex';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/userLogin" component={UserLogin} />
                <Route path="/userRegister" component={UserRegister} />
                <Route path="/userIndex" component={UserIndex} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/companyLogin" component={CompanyLogin} />
                <Route path="/companyRegister" component={CompanyRegister} />
                <Route path="/companyIndex" component={CompanyIndex} />
            </Switch>
        </BrowserRouter>
    );
}