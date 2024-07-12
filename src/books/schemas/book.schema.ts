import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  publicationDate: Date;

  @Prop()
  authorId: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
