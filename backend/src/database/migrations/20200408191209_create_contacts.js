
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table){
        table.increments('id');
        table.integer('contactsUsersId').unsigned();
        table.integer('contactsCompaniesId').unsigned();
        table.string('email');
        table.string('phone');        
        table.foreign('contactsUsersId').references('id').inTable('users');
        table.foreign('contactsCompaniesId').references('id').inTable('companies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contacts');
};
