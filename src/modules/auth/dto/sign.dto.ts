import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString({ message: 'A senha precisa ser uma string' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
