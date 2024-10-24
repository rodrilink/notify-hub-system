import { httpService } from "utils";

import { IMessage } from "../types";

export const getMessages = () => {
  return httpService.get<IMessage[]>("message").then((res) => res);
};
