const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response){
        const { name, birthDate, password, sex, interestArea,
                experienceArea, lastJob, aboutYourself
            } = request.body;

        await connection('users').insert({                     
            name,
            birthDate,
            password,
            sex,
            interestArea,
            experienceArea,
            lastJob,
            aboutYourself
        });

        return response.json({
            name,
            birthDate,
            password,
            sex,
            interestArea,
            experienceArea,
            lastJob,
            aboutYourself
        });
    },

    async update(request, response){
        const { id } = request.params;

        const user = request.body;            
       
        const userUpdate = await connection('users')
            .where('id', id)
            .update({
                name: user.name,
                birthDate: user.birthDate,
                password: user.password,
                sex: user.sex,
                interestArea: user.interestArea,
                experienceArea: user.experienceArea,
                lastJob: user.lastJob,
                aboutYourself: user.aboutYourself
            });

        return response.json(userUpdate);
    }, 

    async delete(request, response){
        const { id } = request.params;

        await connection('users')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};