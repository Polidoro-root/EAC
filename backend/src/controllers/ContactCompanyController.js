const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const contactsCompanies = await connection('contactsCompanies').select('*');
        return response.json(contactsCompanies);
    },

    async create(request, response){
        const companiesId = request.headers.companiesid;
        const contactsId = request.headers.contactsid;

        await connection('contactsCompanies').insert({
            companiesId,
            contactsId
        });

        return response.json({
            companiesId,
            contactsId
        });
    },

    async delete(request, response){
        const { id } = request.params;

        const companiesId = request.headers.companiesid;
        const contactsId = request.headers.contactsid;

        const contactsCompanies = await connection('contactsCompanies')
            .where('id', id)
            .select('companiesId', 'contactsId')
            .first();
            
            if(contactsCompanies.companiesId != companiesId){        
                return response.status(401).json({error: 'Operation not Permited: CompaniesId'});
            }
            if(contactsCompanies.contactsId != contactsId){
                return response.status(401).json({error: 'Operation not Permited: ContactsId'});            
            }

        await connection('contactsCompanies')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};