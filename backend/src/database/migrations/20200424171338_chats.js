
exports.up = function(knex) {
    return knex.schema.createTable('chats', function(table){
        table.increments('id');
        table.integer('chatsUsersId').notNullable();
        table.integer('chatsCompaniesId').notNullable();
        table.integer('chatsVacanciesId').notNullable();
        table.foreign('chatsUsersId').references('id').inTable('users');
        table.foreign('chatsCompaniesId').references('id').inTable('companies');
        table.foreign('chatsVacanciesId').references('id').inTable('vacancies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chats');
};
