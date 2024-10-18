export interface IMessageLog {
  date: string;
  category: string;
  channel: string;
  contact: string; // could be phone, email, or ID
  userId: string;
  username: string;
  message: string;
}
