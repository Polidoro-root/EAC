const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const vacancies = await connection('vacancies').select('*');
        return response.json(vacancies);
    },

    async create(request, response){
        const { vacancy, salary, requirements, entryTime, 
            departureTime, goingToLunch, backToLunch, workDays, benefits
            } = request.body;
        
        const companiesId = request.headers.authorization;

        await connection('vacancies').insert({
            companiesId,
            vacancy,
            salary,
            requirements,
            entryTime, 
            departureTime,
            goingToLunch,
            backToLunch,
            workDays,
            benefits
        });

        return response.json({
            companiesId,
            vacancy,
            salary,
            requirements,
            entryTime, 
            departureTime,
            goingToLunch,
            backToLunch,
            workDays,
            benefits
        });
    },

    async update(request, response){
        const { id } = request.params;

        const vacancy = request.body;

        const vacancyUpdate = await connection('vacancies')
            .where('id', id)
            .update({
                companiesId: vacancy.companiesId,
                vacancy: vacancy.vacancy,
                salary: vacancy.salary,
                requirements: vacancy.requirements,
                entryTime: vacancy.entryTime,  
                departureTime: vacancy.departureTime,
                goingToLunch: vacancy.goingToLunch,
                backToLunch: vacancy.backToLunch,
                workDays: vacancy.workDays,
                benefits: vacancy.benefits
            });

        return response.json(vacancyUpdate);
    },

    async delete(request, response){
        const { id } = request.params;
        const companiesId = request.headers.authorization;

        const vacancies = await connection('vacancies')
            .where('id', id)
            .select('companiesId')
            .first();

        if(vacancies.companiesId != companiesId){
            return response.status(401).json({error: 'Operation not Permited'});
        }
        
        await connection('vacancies')
            .where('id', id)
            .del();

        return response.status(204).send();
    },
};