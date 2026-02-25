import { IUser } from "modules/message/types";

import { createFixture } from "./createFixture";

export const UserFixture = createFixture<IUser>({
  id: 1,
  email: "John@gmail.com",
  username: "john",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  subscriptions: [
    {
      name: "John Doe",
    },
  ],
  channels: [],
  phone: "1-570-236-7033",
});
