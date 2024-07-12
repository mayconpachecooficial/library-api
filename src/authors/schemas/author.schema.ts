import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
  @Prop({ required: true })
  name: string;

  @Prop()
  biography: string;

  @Prop()
  birthdate: Date;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
