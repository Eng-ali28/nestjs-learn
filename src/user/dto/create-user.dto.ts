import { IsString, IsEmail, IsBoolean, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;
  @IsString()
  username: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(8, 32)
  password: string;
  @IsBoolean()
  isActive: boolean;
}
