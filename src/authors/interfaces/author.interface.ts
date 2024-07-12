import { Document } from 'mongoose';

export interface Author extends Document {
  readonly nome: string;
  readonly biografia: string;
  readonly dataNascimento: Date;
}
