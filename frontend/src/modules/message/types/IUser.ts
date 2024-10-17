export interface IUser {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  subscriptions: ISubscription[];
  channels: IChannel[];
}

interface ISubscription {
  name: string;
}

interface IChannel {
  name: string;
}
