/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        supertokens_user_id: { type: 'char(36)', notNull: true},
        email: { type: 'varchar(256)', notNull: true, unique: true},
        username: { type: 'varchar(16)', notNull: true, unique: true}
    });
};

exports.down = pgm => {
    pgm.dropTable('users');
};
