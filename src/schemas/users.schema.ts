import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { /*Document,*/ HydratedDocument } from 'mongoose';

//export type UsersDocument = User & Document;
export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  _id: mongoose.Types.ObjectId | string;
}

export const UsersSchema = SchemaFactory.createForClass(User);
