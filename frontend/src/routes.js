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
import CompanyProfile from './pages/CompanyProfile';
import CompanyChat from './pages/CompanyChat';
import ChangePassword from './pages/ChangePassword';
import AlterContact from './pages/AlterContact';
import AlterProfessional from './pages/AlterProfessional';
import AddGraduation from './pages/AddGraduation';
import AddVacancy from './pages/AddVacancy';
import Chat from './pages/Chat';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/userLogin" exact component={UserLogin} />
                <Route path="/userRegister" exact component={UserRegister} />
                <Route path="/userIndex" exact component={UserIndex} />
                <Route path="/userProfile" exact component={UserProfile} />
                <Route path="/userProfile/changePassword" exact component={ChangePassword} />
                <Route path="/userProfile/alterContact" exact component={AlterContact} />
                <Route path="/userProfile/alterProfessional" exact component={AlterProfessional} />
                <Route path="/userProfile/addGraduation" exact component={AddGraduation} />
                <Route path="/userProfile/chat" exact component={Chat} />
                <Route path="/companyLogin" exact component={CompanyLogin} />
                <Route path="/companyRegister" exact component={CompanyRegister} />
                <Route path="/companyIndex" exact component={CompanyIndex} />
                <Route path="/companyProfile" exact component={CompanyProfile} />
                <Route path="/companyProfile/changePassword" exact component={ChangePassword} />
                <Route path="/companyProfile/alterContact" exact component={AlterContact} />
                <Route path="/companyProfile/addVacancy" exact component={AddVacancy} />
                <Route path="/companyChat" exact component={CompanyChat} />
            </Switch>
        </BrowserRouter>
    );
}