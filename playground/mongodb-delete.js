const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');

   // db.collection('Users').deleteMany({name: 'Gigi Carvalho'}).then((result) => {
   //     console.log(result);
   // });
   db.collection('Users').findOneAndDelete({_id: new ObjectID('5a4b1aeec70bc94ef1b27e02')}).then((result) => {
       console.log(JSON.stringify(result, undefined, 2));
   });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.close();
  });
