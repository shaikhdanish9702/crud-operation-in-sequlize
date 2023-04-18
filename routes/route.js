const express=require('express');
const {  addUser, getBook, getUpdatebook, deleteBook } = require('../controller/controller');
const route=express.Router();

route.post('/',addUser)
route.get('/',getBook);
route.put('/:id',getUpdatebook)
route.delete('/:id',deleteBook)

module.exports={route}