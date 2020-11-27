import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: string;
  id: number;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    // {
    //   id: 1,
    //   username: 'oximon',
    //   password: '123456',
    // },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(user: User) {
    this.users.push(user);
  }
}
