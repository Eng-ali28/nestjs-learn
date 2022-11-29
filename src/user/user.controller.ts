import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import User from './entries/user.entries';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    console.log(user instanceof CreateUserDto);

    return this.userService.createUsers(user);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<UpdateUserDto | string> {
    return this.userService.updateUser(id, user.username);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User[] | string> {
    return this.userService.deleteUser(id);
  }
}
