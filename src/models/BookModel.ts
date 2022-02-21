import mongoose from 'mongoose';
import { Book } from '../types/TSBook';

const bookSchema = new mongoose.Schema<Book>({
  name: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author', // dùng để tham chiếu đến schema tác giả, tên tham chiếu giống với tên của model
  },
});

export const BookModel = mongoose.model<Book>('Book', bookSchema);
