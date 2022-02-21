import { Types } from 'mongoose';

export interface Book {
  name: string;
  publishDate: string;
  genres: string[];
  author: Types.ObjectId;
}
