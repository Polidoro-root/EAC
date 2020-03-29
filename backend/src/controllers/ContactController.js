const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const contacts = await connection('contacts').select('*');
        return response.json(contacts);
    },

    async create(request, response){
        const { email, phone, discord } = request.body;

        const usersId = request.headers.usersid;
        const companiesId = request.headers.companiesid;

        await connection('contacts').insert({
            usersId,
            companiesId,
            email,
            phone,
            discord
        });

        return response.json({
            usersId,
            companiesId,
            email,
            phone,
            discord
        });
    },

    async update(request, response){
        const { id } = request.params;

        const contact = request.body;

        const contactUpdate = await connection('contacts')
            .where('id', id)
            .update({
                email: contact.email,
                phone: contact.phone,
                discord: contact.discord
            });
        
        return response.json({contactUpdate});
    },

    async delete(request, response){
        const { id } = request.params;

        const usersId = request.headers.usersid;
        const companiesId = request.headers.companiesid;

        const contacts = await connection('contacts')
            .where('id', id)
            .select('usersId', 'companiesId')
            .first();

        if(contacts.usersId != usersId){        
            return response.status(401).json({error: 'Operation not Permited: UserId'});
        }
        if(contacts.companiesId != companiesId){        
            return response.status(401).json({error: 'Operation not Permited: CompaniesId'});
        }

        await connection('contacts')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};