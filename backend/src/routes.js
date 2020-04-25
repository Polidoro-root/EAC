const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const CompanyController = require('./controllers/CompanyController');
const GraduationController = require('./controllers/GraduationController');
const ContactController = require('./controllers/ContactController');
const VacancyController = require('./controllers/VacancyController');
const InvitationController = require('./controllers/InvitationController');
const ChatController = require('./controllers/ChatController');

routes.post('/userRegister', UserController.createUser);

routes.post('/userLogin', UserController.createSession);

routes.get('/userIndex', VacancyController.showVacancies);

routes.post('/userIndex', InvitationController.createInvitation);

routes.get('/userProfile', UserController.userData);

routes.put('/userProfile/changePassword', UserController.changePassword);

routes.put('/userProfile/alterProfessional', UserController.alterProfessional);

routes.post('/userProfile/addGraduation', GraduationController.createGraduation);

routes.delete('/userProfile/:id', GraduationController.deleteGraduation);

routes.put('/userProfile/alterContact', ContactController.alterContact);

routes.get('/userProfile/chat', ChatController.listChats);

routes.post('/userProfile/chat', ChatController.createChat);

routes.post('/companyRegister', CompanyController.createCompany);

routes.post('/companyLogin', CompanyController.createSession);

routes.get('/companyIndex', InvitationController.showInvitations);

routes.put('/companyIndex/:id', InvitationController.acceptInvitation);

routes.get('/companyProfile', CompanyController.companyData);

routes.put('/companyProfile/changePassword', CompanyController.changePassword);

routes.put('/companyProfile/alterContact', ContactController.alterContact);

routes.post('/companyProfile/addVacancy', VacancyController.createVacancy);

routes.delete('/companyProfile/:id', VacancyController.deleteVacancy);

routes.put('/companyProfile/alterContact', ContactController.alterContact);

module.exports = routes;