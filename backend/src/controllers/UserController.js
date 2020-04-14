const connection = require('../database/connection');
const GraduationController = require('./GraduationController');

module.exports = {
    async userData(request, response){
        const userId = request.headers.userid;        

        const [data] = await connection('users')
            .join('contacts', 'users.id', 'contacts.contactsUsersId')            
            .where({
                'users.id': userId
            })
            .select('*');

        const graduations = await connection('graduations')
            .where('graduationsUsersId', userId)
            .select('*');        
        
        return response.json([data, graduations]);
    },

    async createUser(request, response){
        const { password, email, phone, interestArea, experienceArea,
            lastJob, aboutYourself } = request.body;

        const [selectEmail] = await connection('contacts')
            .where({
                email: email
            })
            .select('email');        

        if(!selectEmail){
            const [ userId ] = await connection('users')
                .returning('id')
                .insert({
                    password: password,
                    interestArea: interestArea,
                    experienceArea: experienceArea,
                    lastJob: lastJob,
                    aboutYourself: aboutYourself
                });

            await connection('contacts')
                .insert({
                    contactsUsersId: userId,
                    email: email,
                    phone: phone            
                });
            
            return response.json({ userId, password, email, phone, interestArea, experienceArea,
                lastJob, aboutYourself });
        }
        else{            
            return response.json({ error: "This email already exists" });
        }
    },

    async createSession(request, response){
        const { email, password } = request.body;

        const [user] = await connection('users')
            .innerJoin('contacts', 'users.id', 'contacts.contactsUsersId')
            .where({                
                'contacts.email': email,
                'users.password': password
            })
            .select('users.id', 'contacts.id as contactid', 'contacts.email', 'users.password');
        
        if (!user) {
            return response.status(400).json({ error: 'No User with this email or password' });
        }
    
        return response.json(user);
    },

    async changePassword(request, response){
        const { currentPassword, newPassword, id } = request.body;                

        const [dbPassword] = await connection('users')
            .select('password')
            .where('id', id);

        if(currentPassword === dbPassword.password){
            const userPassword = await connection('users')
                .update({
                    password: newPassword
                })
                .where('id', id);
            
            return response.json(userPassword);
        }
        else{
            return response.json({ error: "The passwords aren't equals" });
        }
    },

    async alterProfessional(request, response){        
        const id = request.headers.id       

        const { interestArea, experienceArea, lastJob,
            aboutYourself } = request.body;

        const user = await connection('users')
            .where('id', id)            
            .update({
                interestArea: interestArea,
                experienceArea: experienceArea,
                lastJob: lastJob,
                aboutYourself: aboutYourself
            });

        return response.json(user);
    }
};