
exports.up = function(knex) {
    return knex.schema.createTable('graduations', function(table){
        table.increments('id');
        table.integer('graduationsUsersId').unsigned().notNullable();
        table.string('graduationLevel').notNullable();
        table.string('course').notNullable();
        table.foreign('graduationsUsersId').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('graduations');
};
