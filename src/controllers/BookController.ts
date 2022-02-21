import { Request, Response } from 'express';
import { AuthorModel } from '../models/AuthorModel';
import { BookModel } from '../models/BookModel';

class BookController {
  async getAllBook(req: Request, res: Response) {
    try {
      const allBook = await BookModel.find();
      res.status(200).json(allBook);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const book = await BookModel.find({ _id: req.params.id }).populate('author');
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async addBook(req: Request, res: Response) {
    try {
      const newBook = new BookModel(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = AuthorModel.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BookController();
