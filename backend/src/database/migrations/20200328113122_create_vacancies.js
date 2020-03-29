
exports.up = function(knex) {
    return knex.schema.createTable('vacancies', function(table){
        table.increments();
        table.integer('companiesId').notNullable();
        table.string('vacancy').notNullable();
        table.decimal('salary').notNullable();
        table.string('requirements').notNullable();
        table.time('entryTime').notNullable();
        table.time('departureTime').notNullable();
        table.time('goingToLunch').notNullable();
        table.time('backToLunch').notNullable();
        table.string('workDays').notNullable();
        table.string('benefits').notNullable();
        table.foreign('companiesId').references('id').inTable('companies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vacancies');
};
