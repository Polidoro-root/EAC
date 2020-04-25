
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table){
        table.increments('id');
        table.integer('messagesChatsId').notNullable();
        table.json('messages').notNullable();
        table.foreign('messagesChatsId').references('id').inTable('chats');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
};
