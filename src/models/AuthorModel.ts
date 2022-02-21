import mongoose from 'mongoose';
import { Author } from '../types';

const authorSchema = new mongoose.Schema<Author>({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // tên này phải trùng với tên của schame liên kết
    },
  ],
});

export const AuthorModel = mongoose.model<Author>('Author', authorSchema);
