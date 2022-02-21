import express from 'express';
import BookController from '../controllers/BookController';

const route = express.Router();

//GET ALL BOOK
route.get('/book', BookController.getAllBook);
//GET BOOK ID
route.get('/book/:id', BookController.getBookById);
//ADD BOOK
route.post('/book', BookController.addBook);

export default route;
