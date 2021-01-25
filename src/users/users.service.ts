import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async createUser(user: User): Promise<string> {
    const candidate = await this.userModel.findOne({ username: user.username });

    if (candidate) {
      throw new Error('Пользователь с таким именем уже существует');
    }

    const hashPassword = await bcrypt.hash(user.password, 12);

    const createdUser = new this.userModel({ ...user, password: hashPassword });
    createdUser.save();

    return `${user.username} создан`;
  }
}
