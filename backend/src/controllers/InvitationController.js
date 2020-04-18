const connection = require('../database/connection');

module.exports = {
    async showInvitations(request, response){        
        const companyId = request.headers.companyid;    

        let invitations = await connection('invitations')
            .join('users', 'invitations.invitationsUsersId', 'users.id')
            .where({                
                'invitations.invitationsCompaniesId': companyId,
                'invitations.accepted': false
            })
            .select('invitations.*', 'users.id as userId','users.interestArea',
                'users.experienceArea', 'users.lastJob', 'users.aboutYourself'
            );
        
        for (let index = 0; index < invitations.length; index++) {
            invitations[index]['graduations'] = await connection('graduations')
                .where('graduationsUsersId', '=', invitations[index]['invitationsUsersId'])
                .select('*');            
        }

        return response.json(invitations);
    },

    async createInvitation(request, response){
        const { userId, companyId, vacancyId } = request.body;

        console.log(userId, companyId, vacancyId);

        const [invite] = await connection('invitations')
            .returning('*')
            .insert({
                invitationsUsersId: userId,
                invitationsCompaniesId: companyId,
                invitationsVacanciesId: vacancyId,
            });

        return response.json(invite);
    },

    async acceptInvitation(request, response){
        const invitationId = request.params;
        console.log(invitationId.id);

        const [invitation] = await connection('invitations')
            .returning('*')
            .update({
                accepted: true
            })
            .where({
                id: invitationId.id,
                accepted: false
            });

        return response.json(invitation);
    }
};