const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const addresses = await connection('addresses').select('*');
        return response.json(addresses);
    },

    async create(request, response){
        const { zipCode, publicPlace, number, 
            neighborhood, city, uf } = request.body;

        const usersId = request.headers.usersid;
        const companiesId = request.headers.companiesid;
        const vacanciesId = request.headers.vacanciesid;
        

        await connection('addresses').insert({
            usersId,
            companiesId,
            vacanciesId,            
            zipCode,
            publicPlace,
            number,
            neighborhood,
            city,
            uf
        });

        return response.json({
            usersId,
            companiesId,
            vacanciesId,            
            zipCode,
            publicPlace,
            number,
            neighborhood,
            city,
            uf
        });
    },

    async update(request, response){
        const { id } = request.params;

        const address = request.body;        

        const addressUpdate = await connection('addresses')
            .where('id', id)
            .update({                
                zipCode: address.zipCode,
                publicPlace: address.publicPlace,
                number: address.number,
                neighborhood: address.neighborhood,
                city: address.city,
                uf: address.uf
            });

        return response.json(addressUpdate);
    },

    async delete(request, response){
        const { id } = request.params;

        const usersId = request.headers.usersid;
        const companiesId = request.headers.companiesid;
        const vacanciesId = request.headers.vacanciesid;

        const addresses = await connection('addresses')
            .where('id', id)
            .select('usersId', 'companiesId', 'vacanciesId')
            .first();        

        if(addresses.usersId != usersId){        
            return response.status(401).json({error: 'Operation not Permited: UserId'});
        }
        if(addresses.companiesId != companiesId){
            return response.status(401).json({error: 'Operation not Permited: CompaniesId'});
        }
        if(addresses.vacanciesId != vacanciesId){
            return response.status(401).json({error: 'Operation not Permited: VacanciesId'});
        } 
        
        await connection('addresses')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};