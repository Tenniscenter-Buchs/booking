/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('court_reservation_slots', {
        id: 'id',
        reservation_start_time: { type: 'time', notNull: true},
        reservation_end_time: { type: 'time', notNull: true},
        court_id: { type: 'integer', notNull: true, reference: 'courts'},
    });
};

exports.down = pgm => {
    pgm.dropTable('court_reservation_slots');
};
