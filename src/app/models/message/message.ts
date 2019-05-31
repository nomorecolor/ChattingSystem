import { User } from '../user/user';

export class Message {
  userId: number;
  body: string;
  createdAt: Date;
  userMessage: User;
}
