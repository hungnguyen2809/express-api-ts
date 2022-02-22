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

  async updateBook(req: Request, res: Response) {
    try {
      const book = await BookModel.findById({ _id: req.params.id });
      if (book) {
        await book.updateOne({ $set: req.body });
        res.status(200).json({ messgae: 'Update book successfully' });
      } else {
        res.status(200).json({ messgae: 'Not found book' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const book = await BookModel.findById({ _id: req.params.id });
      if (book) {
        //updateMany: tìm trong bảng tác giả lấy tất cả book có id truyền vào rồi xóa
        await AuthorModel.updateMany({ books: req.params.id }, { $pull: { books: req.params.id } });
        // findByIdAndDelete tìm và xóa luôn
        await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ messgae: 'Delete Successfully' });
      } else {
        res.status(200).json({ messgae: 'Not found book' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BookController();
