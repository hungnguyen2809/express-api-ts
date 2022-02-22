import { Request, Response } from 'express';
import { AuthorModel } from '../models/AuthorModel';
import { BookModel } from '../models/BookModel';

class AuthorController {
  async getAllAuthor(req: Request, res: Response) {
    try {
      const allAuthor = await AuthorModel.find();
      res.status(200).json(allAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAuthorById(req: Request, res: Response) {
    try {
      // books chính là key trong model được dùng để tham chiếu, populate lấy tất cả các thông tin tham chiếu đó
      const author = await AuthorModel.find({ _id: req.params.id }).populate('books');
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async addAuthor(req: Request, res: Response) {
    try {
      const newAuthor = new AuthorModel(req.body);
      const savedAuthor = await newAuthor.save();

      res.status(200).json(savedAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateAuthor(req: Request, res: Response) {
    try {
      const author = await AuthorModel.findById({ _id: req.params.id });
      if (author) {
        await author.updateOne({ $set: req.body });
        res.status(200).json({ messgae: 'Update author successfully' });
      } else {
        res.status(200).json({ messgae: 'Not found author' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteAuthor(req: Request, res: Response) {
    try {
      const author = await AuthorModel.findById({ _id: req.params.id });
      if (author) {
        // không dùng $pull do author nó không phải là mảng
        await BookModel.updateMany({ author: req.params.id }, { author: null });
        await AuthorModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ messgae: 'Delete author successfully' });
      } else {
        res.status(200).json({ messgae: 'Not found author' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthorController();
