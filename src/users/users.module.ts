import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UsersSchema } from '../schemas/users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    // Он тут говорит, что создай мне коллекцию с именем User.name = "User" и по схеме описанной в классе User.
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
