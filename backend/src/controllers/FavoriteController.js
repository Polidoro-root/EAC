const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const favorites = await connection('favorites').select('*');
        return response.json(favorites);
    },

    async create(request, response){
        const usersId = request.headers.usersid;
        const vacanciesId = request.headers.vacanciesid;

        await connection('favorites').insert({
            usersId,
            vacanciesId,
        });

        return response.json({
            usersId,
            vacanciesId,
        });
    },

    async delete(request, response){
        const { id } = request.params;

        const usersId = request.headers.usersid;
        const vacanciesId = request.headers.vacanciesid;

        const favorites = await connection('favorites')
            .where('id', id)
            .select('usersId', 'vacanciesId')
            .first();

        if(favorites.usersId != usersId){        
            return response.status(401).json({error: 'Operation not Permited: UserId'});
        }
        if(favorites.vacanciesId != vacanciesId){        
            return response.status(401).json({error: 'Operation not Permited: VacanciesId'});
        }

        await connection('favorites')
            .where('id', id)
            .del();

        return response.status(204).send();
    },
};