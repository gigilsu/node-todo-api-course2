const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5a4d1b2dc8dd116f69e5c2a5').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({text: 'To Be Deleted'}).then((todo) => {
  console.log(todo);
});
