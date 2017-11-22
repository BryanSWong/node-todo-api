// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB.server');

    // deleteMany - deletes all items found that fit parameters
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todo', err);
    // });
    // deleteOne - deletes the first item that matches the parameters, if there are dupes they remain.
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todo', err);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete Todo', err);
    //     });
    // db.collection('Users').deleteMany({location: 'HappyTown'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todo', err);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a0d07392d28d9d2a357651d')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete Todo', err);
    });


    // db.close();
});