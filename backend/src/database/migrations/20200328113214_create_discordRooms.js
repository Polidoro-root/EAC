
exports.up = function(knex) {
    return knex.schema.createTable('discordRooms', function(table){
        table.increments();
        table.integer('favoritesId').notNullable();
        table.integer('contactsUsersId').notNullable();
        table.integer('contactsCompaniesId').notNullable();
        table.foreign('favoritesId').references('id').inTable('favorites');                
        table.foreign('contactsUsersId').references('id').inTable('contactsUsers');            
        table.foreign('contactsCompaniesId').references('id').inTable('contactsCompanies');                
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('discordRooms');
};
