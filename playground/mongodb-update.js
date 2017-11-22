// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB.server');

    // .findOneAndUpdate(filter, update, options, callback)

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a0d03182d28d9d2a357651c')}, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //    returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate(
    //     {name: 'Dude'},
    //     {
    //         $set: {
    //             name: 'Someguy'
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a0cd9ad987db35aa36ff6ff')
    }, {
        $set: {
            name: "SomeDude"
        },
        $inc: {
            age: +3
        }
    }, {
           returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // db.close();
});