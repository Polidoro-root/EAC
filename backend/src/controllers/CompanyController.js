const connection = require('../database/connection');

module.exports = {
    async companyData(request, response){
        const companyId = request.headers.companyid;

        const company = await connection('companies')
            .join('contacts', 'companies.id', 'contacts.contactsCompaniesId')
            .where({
                'contacts.contactsCompaniesId': companyId,
                'companies.id': companyId
            })
            .select('companies.*', 'contacts.id as contactId', 'contacts.email',
                'contacts.phone'
            );

        for (let index in company){
            company[index]['vacancies'] = await connection('vacancies')
                .where('vacanciesCompaniesId', '=', company[index]['id'])
                .select('*');
        }

        return response.json(company);        
    },

    async createCompany(request, response){
        const { name, cnpj, password, email, phone } = request.body;

        const [selectEmail] = await connection('contacts')
            .where({
                email: email
            })
            .select('email');        

        if(!selectEmail){
            const [ companyId ] = await connection('companies')
                .returning('id')
                .insert({
                    name: name,
                    cnpj: cnpj,
                    password: password                    
                });

            const [ contactId ] = await connection('contacts')
            .returning('id')
                .insert({
                    contactsCompaniesId: companyId,
                    email: email,
                    phone: phone            
                });            
            
            return response.json({ companyId, name, cnpj, password,
                contactId, email, phone });
        }
        else{            
            return response.json({ error: "This email already exists" });
        }
    },
    
    async createSession(request, response){
        const { email, password } = request.body;

        const [company] = await connection('companies')
            .innerJoin('contacts', 'companies.id', 'contacts.contactsCompaniesId')
            .where({
                'contacts.email': email,
                'companies.password': password
            })
            .select('companies.id', 'contacts.id as contactid', 'contacts.email', 'companies.password');
        
        if (!company) {
            return response.status(400).json({ error: 'No Company with this email or password' });
        }
    
        return response.json(company);
    },

    async changePassword(request, response){
        const { currentPassword, newPassword, id } = request.body;                

        const [dbPassword] = await connection('companies')
            .select('password')
            .where('id', id);

        if(currentPassword === dbPassword.password){
            const companyPassword = await connection('companies')
                .update({
                    password: newPassword
                })
                .where('id', id);
            
            return response.json(companyPassword);
        }
        else{
            return response.json({ error: "The passwords aren't equals" });
        }
    }
};