const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const GraduationController = require('./controllers/GraduationController');
const CompanyController = require('./controllers/CompanyController');
const VacancyController = require('./controllers/VacancyController');
const AddressController = require('./controllers/AddressController');
const ContactController = require('./controllers/ContactController');
const ContactUserController = require('./controllers/ContactUserController');
const ContactCompanyController = require('./controllers/ContactCompanyController');
const FavoriteController = require('./controllers/FavoriteController');
const DiscordRoomController = require('./controllers/DiscordRoomController');
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
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),    
    [Segments.BODY]: Joi.object().keys({
        graduationLevel: Joi.string().required(),
        course: Joi.string().required()
    })
}),GraduationController.update);

routes.delete('/graduations/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.number().required()
    }).unknown(),
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
routes.get('/vacancies', VacancyController.index);

routes.post('/vacancies', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.number().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        vacancy: Joi.string().required(),
        salary: Joi.number().required(),
        requirements: Joi.string().required(),
        entryTime: Joi.string().required(),
        departureTime: Joi.string().required(),
        goingToLunch: Joi.string().required(),
        backToLunch: Joi.string().required(),    
        workDays: Joi.string().required(),    
        benefits: Joi.string().required(),    
    })
}), VacancyController.create);

routes.put('/vacancies/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        vacancy: Joi.string().required(),
        salary: Joi.number().required(),
        requirements: Joi.string().required(),
        entryTime: Joi.string().required(),
        departureTime: Joi.string().required(),
        goingToLunch: Joi.string().required(),
        backToLunch: Joi.string().required(),    
        workDays: Joi.string().required(),    
        benefits: Joi.string().required(),    
    })
}), VacancyController.update);

routes.delete('/vacancies/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.number().required()
    }).unknown(),
}), VacancyController.delete);
// vacancies routes - end

// addresses routes - start
routes.get('/addresses', AddressController.index);

routes.post('/addresses', celebrate({
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        companiesId: Joi.optional(),
        vacanciesId: Joi.optional(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        zipCode: Joi.string().optional(),
        publicPlace: Joi.string().required(),
        number: Joi.number().required(),
        neighborhood: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required()
    })
}), AddressController.create);

routes.put('/addresses/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),    
    [Segments.BODY]: Joi.object().keys({
        zipCode: Joi.string().optional(),
        publicPlace: Joi.string().required(),
        number: Joi.number().required(),
        neighborhood: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required()
    })
}), AddressController.update);

routes.delete('/addresses/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        companiesId: Joi.optional(),
        vacanciesId: Joi.optional(),
    }).unknown()
}), AddressController.delete);
// addresses routes - end

// contacts routes - start
routes.get('/contacts', ContactController.index);

routes.post('/contacts', celebrate({
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        companiesId: Joi.optional()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().optional(),
        phone: Joi.string().optional(),
        discord: Joi.string().optional()
    })
}), ContactController.create);

routes.put('/contacts/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().optional(),
        phone: Joi.string().optional(),
        discord: Joi.string().optional()
    })
}), ContactController.update);

routes.delete('/contacts/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        companiesId: Joi.optional()
    }).unknown(),
}), ContactController.delete);
// contacts routes - end

// favorites routes - start
routes.get('/favorites', FavoriteController.index);

routes.post('/favorites', celebrate({
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        vacanciesId: Joi.optional()
    }).unknown()
}), FavoriteController.create);

routes.delete('/favorites/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        usersId: Joi.optional(),
        vacanciesId: Joi.optional()
    }).unknown()
}), FavoriteController.delete);
// favorites routes - end

// contactUser - start
routes.get('/contactsUsers', ContactUserController.index);

routes.post('/contactsUsers', ContactUserController.create);

routes.delete('/contactsUsers/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })    
}), ContactUserController.delete);
// contactUser - end

// contactCompany - start
routes.get('/contactsCompanies', ContactCompanyController.index);

routes.post('/contactsCompanies', ContactCompanyController.create);

routes.delete('/contactsCompanies/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), ContactCompanyController.delete);
// contactCompany - end

// discordRooms - start
routes.get('/discordRooms', DiscordRoomController.index);

routes.post('/discordRooms', DiscordRoomController.create);

routes.delete('/discordRooms/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })    
}), DiscordRoomController.delete);
// discordRooms - end

module.exports = routes;