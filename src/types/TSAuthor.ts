import { Types } from 'mongoose';

export interface Author {
  name: string;
  year: number;
  books: Types.ObjectId[];
}
