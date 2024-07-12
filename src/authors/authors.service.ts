import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './schemas/author.schema';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findOne(id: string): Promise<Author> {
    const author = await this.authorModel.findById(id).exec();
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const existingAuthor = await this.authorModel.findByIdAndUpdate(id, updateAuthorDto, { new: true }).exec();
    if (!existingAuthor) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return existingAuthor;
  }

  async remove(id: string): Promise<Author> {
    const deletedAuthor = await this.authorModel.findByIdAndDelete(id).exec();
    if (!deletedAuthor) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return deletedAuthor;
  }
}
