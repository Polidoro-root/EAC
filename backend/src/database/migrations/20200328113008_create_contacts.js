
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table){
        table.increments();
        table.integer('usersId').unsigned();
        table.integer('companiesId').unsigned();
        table.string('email');
        table.string('phone');
        table.string('discord', 4);
        table.foreign('usersId').references('id').inTable('users');
        table.foreign('companiesId').references('id').inTable('companies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contacts');
};
