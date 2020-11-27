import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: any;
  id: number;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(user: User): Promise<string> {
    const candidate = this.users.find((curUser) => curUser.id === user.id);

    if (candidate) {
      throw new Error('Пользователь с такой почтой уже существует');
    }

    const hashPassword = await bcrypt.hash(user.password, 12);

    this.users.push({
      ...user,
      password: hashPassword,
    });

    return `${user.username} создан`;
  }
}
