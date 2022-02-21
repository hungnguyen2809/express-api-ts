import express from 'express';
import AuthorController from '../controllers/AuthorController';

const route = express.Router();

//GET ALL AUTHORS
route.get('/author', AuthorController.getAllAuthor);
//GET AUTHOR BY ID
route.get('/author/:id', AuthorController.getAuthorById);
//ADD AUTHOR
route.post('/author', AuthorController.addAuthor);

export default route;
