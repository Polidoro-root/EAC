const connection = require('../database/connection');

module.exports = {
    async createVacancy(request, response){
        const companyId = request.headers.companyid;

        const { vacancy, salary, requirements, city, uf } = request.body;

        const insertedVacancy = await connection('vacancies')
            .returning('*')
            .insert({
                vacanciesCompaniesId: companyId,
                vacancy: vacancy,
                salary: salary,
                requirements: requirements,
                city: city,
                uf: uf
            });

        return response.json(insertedVacancy);
    },

    async deleteVacancy(request, response){
        const { id } = request.params;
        const companyId = request.headers.companyid;

        const vacancy = await connection('vacancies')
          .where('id', id)
          .select('vacanciesCompaniesId')
          .first();        

        if (vacancy.vacanciesCompaniesId != companyId) {
          return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('vacancies')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};