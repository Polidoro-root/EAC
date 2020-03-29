const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const GraduationController = require('./controllers/GraduationController');
const CompanyController = require('./controllers/CompanyController');
const VacancyController = require('./controllers/VacancyController');
const { celebrate, Segments, Joi } = require('celebrate');

// users routes - start
routes.get('/users', UserController.index);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({        
        name: Joi.string().required(),
        birthDate: Joi.required(),
        password: Joi.string().required(),
        sex: Joi.string().length(1).required(),
        interestArea: Joi.string().required(),
        experienceArea: Joi.string().required(),
        lastJob: Joi.string().required(),
        aboutYourself: Joi.string().required()
    })
}), UserController.create);

routes.put('/users/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({        
        name: Joi.string().required(),
        birthDate: Joi.required(),
        password: Joi.string().required(),
        sex: Joi.string().length(1).required(),
        interestArea: Joi.string().required(),
        experienceArea: Joi.string().required(),
        lastJob: Joi.string().required(),
        aboutYourself: Joi.string().required()
    })
}), UserController.update);

routes.delete('/users/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })    
}), UserController.delete);
// users routes - end

// graduations routes - start
routes.get('/graduations', GraduationController.index);

routes.post('/graduations', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.number().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        graduationLevel: Joi.string().required(),
        course: Joi.string().required()
    })
}),GraduationController.create);

routes.put('/graduations/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        graduationLevel: Joi.string().required(),
        course: Joi.string().required()
    })
}),GraduationController.update);

routes.delete('/graduations/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), GraduationController.delete);
// graduations routes - end

// companies routes - start
routes.get('/companies', CompanyController.index);

routes.post('/companies', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        cnpj: Joi.string().length(14).required(),
        password: Joi.string().required()
    })
}), CompanyController.create);

routes.put('/companies/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        cnpj: Joi.string().length(14).required(),
        password: Joi.string().required()
    })
}), CompanyController.update);

routes.delete('/companies/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), CompanyController.delete);
// companies routes - end

// vacancies routes - start
routes.get('/vacancies', celebrate({}), VacancyController.index);

routes.post('/vacancies', celebrate({}), VacancyController.create);

routes.put('/vacancies/:id', celebrate({}), VacancyController.update);

routes.delete('/vacancies/:id', celebrate({}), VacancyController.delete);
// vacancies routes - end

module.exports = routes;