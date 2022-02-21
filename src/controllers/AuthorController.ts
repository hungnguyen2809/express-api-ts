import { Request, Response } from 'express';
import { AuthorModel } from '../models/AuthorModel';

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
}

export default new AuthorController();
