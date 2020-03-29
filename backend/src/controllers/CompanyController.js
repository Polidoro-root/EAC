const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const companies = await connection('companies').select('*');
        return response.json(companies); 
    },

    async create(request, response){
        const { name, cnpj, password } = request.body;

        await connection('companies').insert({
            name,
            cnpj,
            password
        });

        return response.json({
            name,
            cnpj,
            password
        });
    },

    async update(request, response){
        const { id } = request.params;

        const company = request.body;

        const companyUpdate = await connection('companies')
            .where('id', id)
            .update({
                name: company.name,
                cnpj: company.cnpj,
                password: company.password
            });

        return response.json(companyUpdate);
    },

    async delete(request, response){
        const { id } = request.params;
        
        await connection('companies')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};