const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5a4b2e60fc5ad18e8e484d64')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a4b16d68a86054ec6c47faa')
    }, {
      $set: {
        name: 'Marylou'
      },
      $inc: { "age" : 1}
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  db.close();
  });
