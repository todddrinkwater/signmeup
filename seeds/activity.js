
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {id: 1, activity_name: 'Basketball', meeting_time: '5:25 PM', meeting_date: 'Tuesday 25th March', meeting_location: 'Gym 1', description: 'Slam dunk the funk!'},
        {id: 2, activity_name: 'Softball', meeting_time: '6:00 PM', meeting_date: 'Wednesday 26th March', meeting_location: 'Bottom Field', description: 'Home run sonnn!'},
        {id: 3, activity_name: 'Rowing', meeting_time: '7:00 PM', meeting_date: 'Thursday 27th March', meeting_location: 'Hamilton Rowing Club', description: 'Feel the rythym, feel the ride!'}
      ]);
    });
};
