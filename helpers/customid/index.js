//var customId = require('custom-id');
var sequential = require("sequential-ids");

var generator = new sequential.Generator({
    digits: 3, letters: 3,
    restore: "000"
  });

// var customIdGenerator = customId({
//     randomLength: 1,
//     uniqueId: 4563
// });

//console.log(customIdGenerator);

//generator.start();
// var new_id_1   = generator.generate();
// var new_id_2   = generator.generate();
// //generator.stop();

// console.log(new_id_1);
// console.log(new_id_2);

module.exports = generator;
