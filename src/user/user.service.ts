import { Injectable } from '@nestjs/common';
import User from './entries/user.entries';
@Injectable()
export class UserService {
  public user: User[] = [];

  createUsers(user: User): User {
    this.user.push(user);
    return user;
  }
  getUsers(): User[] {
    return this.user;
  }
  deleteUser(id: string): User[] | string {
    const userIndex = getUserIndex(id, this.user);
    if (userIndex == -1) {
      return `there aren't any user with this id #${id}`;
    }
    this.user.splice(userIndex, 1);
    return this.user;
  }
  updateUser(id: string, username: string): User | string {
    const userIndex = getUserIndex(id, this.user);
    if (userIndex == -1) {
      return `no user with this id ${id}`;
    }
    this.user[userIndex].username = username;
    return this.user[userIndex];
  }
}
function getUserIndex(id: string, user: User[]): number {
  return user.indexOf(user.find((ele: User) => ele.id == id));
}
