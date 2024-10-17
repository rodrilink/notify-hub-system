import { buildUrl, httpService, queryClient, useQuery } from "utils";

import { IMessage } from "../types";
import { IMessageDto } from "./types";

import { useMutation } from "@tanstack/react-query";

import { getMessagesQueryKey } from "./messagesQuery";

export const sendMessage = () => {
  return useMutation(
    (message: IMessage) =>
      httpService.post<IMessageDto>(buildUrl("message"), message),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(getMessagesQueryKey());
      },
    }
  );
};
