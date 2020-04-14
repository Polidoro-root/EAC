const connection = require('../database/connection');

module.exports = {
    async indexGraduation(request, response){
        const userId = request.headers.userid;

        const graduations = await connection('graduations')
            .where('graduationsUsersId', userId)
            .select('*');

        return response.json(graduations);
    },

    async createGraduation(request, response){
        const id = request.headers.userid;
        const { graduationLevel, course } = request.body;        

        const [graduation] = await connection('graduations')
            .returning('*')
            .insert({
                graduationsUsersId: id,
                graduationLevel: graduationLevel,
                course: course
            });

        return response.json(graduation);
    },

    async deleteGraduation(request, response){
        const { id } = request.params;
        const userId = request.headers.userid;

        const graduation = await connection('graduations')
          .where('id', id)
          .select('graduationsUsersId')
          .first();        

        if (graduation.graduationsUsersId != userId) {
          return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('graduations')
            .where('id', id)
            .del();

        return response.status(204).send();
    },
};