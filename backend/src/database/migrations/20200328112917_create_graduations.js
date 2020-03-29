
exports.up = function(knex) {
    return knex.schema.createTable('graduations', function(table){
        table.increments();
        table.integer('usersId').notNullable();
        table.string('graduationLevel').notNullable();
        table.string('course').notNullable();
        table.foreign('usersId').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('graduations');
};
