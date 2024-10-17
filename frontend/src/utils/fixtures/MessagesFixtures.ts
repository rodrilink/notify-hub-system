import { IMessage } from "modules/message/types";

import { createFixture } from "./createFixture";

export const MessagesFixture = createFixture<IMessage[]>([
  {
    message: "Hello, World!",
    category: "Movies",
  },
]);
