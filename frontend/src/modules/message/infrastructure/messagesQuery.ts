import { UseQueryOptions } from "@tanstack/react-query";

import { buildUrl, httpService, useQuery } from "utils";

import { IMessage } from "../types";

export const useMessagesQuery = (options?: UseQueryOptions<IMessage[]>) => {
  return useQuery({
    queryKey: ["message"],
    queryFn: (): Promise<IMessage[]> =>
      httpService.get<IMessage[]>(buildUrl("message/logs")).then((res) => res),
    ...options,
  });
};
