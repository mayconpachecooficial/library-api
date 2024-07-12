import { Document } from 'mongoose';

export interface Book extends Document {
  readonly titulo: string;
  readonly descricao: string;
  readonly dataPublicacao: Date;
  readonly autorId: string;
}
