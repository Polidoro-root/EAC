const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const graduations = await connection('graduations').select('*');
        return response.json(graduations);
    },

    async create(request, response){
        const { graduationLevel, course } = request.body;
        const usersId = request.headers.authorization;

        await connection('graduations').insert({
            usersId,
            graduationLevel,
            course
        });

        return response.json({
            usersId,
            graduationLevel,
            course
        });
    },

    async update(request, response){
        const { id } = request.params;        

        const graduation = request.body;

        const graduationUpdate = await connection('graduations')
            .where('id', id)
            .update({                
                graduationLevel: graduation.graduationLevel,
                course: graduation.course,
            });

        return response.json(graduationUpdate);
    },

    async delete(request, response){
        const { id } = request.params;
        
        const usersId = request.headers.authorization;

        const graduations = await connection('graduations')
            .where('id', id)
            .select('usersId')
            .first();        

        if(graduations.usersId != usersId){
            return response.status(401).json({error: 'Operation not Permited'});
        }

        await connection('graduations')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};