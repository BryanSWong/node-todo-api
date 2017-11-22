const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5a149db3299a5ed412808b9e11';
//
// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }
//
//  Todo.find({ _id: id}).then((todos) => {
//      console.log('Todos', todos)
//  });
//
//  Todo.findOne({ _id: id}).then((todo) => {
//      console.log('Todo', todo)
//  });
//
// Todo.findById(id).then((todo) => {
//     if(!todo){
//        return console.log('No id found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

let id = '5a0e0d14674be7b412b2c9d4';

User.findById(id).then((user) => {
    if(!user){
        return console.log('no user found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));