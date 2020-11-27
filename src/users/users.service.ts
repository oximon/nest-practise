import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: string;
  id: number;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
