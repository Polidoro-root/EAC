
exports.up = function(knex) {
    return knex.schema.createTable('contactsUsers', function(table){
        table.increments();
        table.integer('usersId').notNullable();
        table.integer('contactsId').notNullable();
        table.foreign('usersId').references('id').inTable('users');
        table.foreign('contactsId').references('id').inTable('contacts');
    });
};

exports.down = function(knex) {
        return knex.schema.dropTableIfExists('contactUsers');
};
