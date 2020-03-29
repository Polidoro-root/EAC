
exports.up = function(knex) {
    return knex.schema.createTable('favorites', function(table){
        table.increments();
        table.integer('usersId');
        table.integer('vacanciesId');
        table.foreign('usersId').references('id').inTable('users');                
        table.foreign('vacanciesId').references('id').inTable('vacancies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites');
};
