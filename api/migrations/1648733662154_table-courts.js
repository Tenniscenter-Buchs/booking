/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('courts', {
        id: 'id',
        description: { type: 'varchar', notNull: true}
    });
};

exports.down = pgm => {
    pgm.dropTable('courts');
};
