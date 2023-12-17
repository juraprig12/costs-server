import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(1, {
    message: 'Переменная `username` должна содержат не меньше 1 символа',
  })
  @IsNotEmpty({ message: 'Имя пользователя не может быть пустым' })
  readonly username: string;

  @MinLength(1, {
    message: 'Переменная `password` должна содержат не меньше 1 символа',
  })
  @IsNotEmpty({ message: 'Пароль не может быть пустым' })
  readonly password: string;
}
