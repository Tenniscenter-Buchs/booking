/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('court_reservations', {
        id: 'id',
        user_id: { type: 'integer', notNull: true, references: 'users'},
        slot_id: { type: 'integer', notNull: true, references: 'court_reservation_slots'},
        date: { type: 'date', notNull: true }
    });
};

exports.down = pgm => {
    pgm.dropTable('court_reservations');
};
