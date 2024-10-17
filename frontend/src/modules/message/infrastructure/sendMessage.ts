import { buildUrl, httpService, queryClient } from "utils";

import { IMessage } from "../types";

import { useMutation } from "@tanstack/react-query";

export const sendMessage = () => {
  return useMutation(
    (message: IMessage) =>
      httpService.post<IMessage>(buildUrl("message"), message),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["message"]);
      },
    }
  );
};
