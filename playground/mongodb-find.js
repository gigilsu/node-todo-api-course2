const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');

  db.collection('Users').find({
    name: 'Jason Clifton'
  }).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
    db.close();
  });

//   db.collection('Todos').find({
//     _id: new ObjectID('5a4b15c8ab91474ec1134140')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });
//
//   db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });  db.close();
// });
