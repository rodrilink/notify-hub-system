import { UseQueryOptions } from "@tanstack/react-query";

import { IQueryParams, IMeta } from "types";

import { buildUrl, httpService, queryClient, useQuery } from "utils";

import { IMessage } from "../types";
import { IMessageDto } from "./types";

const defaultParams = { limit: 10, sort: "asc" };

interface ICollection {
  messages: IMessage[];
  meta: IMeta;
}

export const getMessagesQueryKey = (params: IQueryParams = defaultParams) => [
  "messages",
  params,
];

const getMessagesQuery = (params: IQueryParams = defaultParams) => ({
  queryKey: getMessagesQueryKey(params),
  queryFn: (): Promise<ICollection> =>
    httpService
      .get<IMessageDto[]>(buildUrl("messages", params))
      .then((res) => ({
        messages: res,
        meta: {
          ...params,
          total: 20,
        },
      })),
});

export const useMessagesQuery = (
  params: IQueryParams = defaultParams,
  options?: UseQueryOptions<ICollection>
) => {
  return useQuery({
    ...getMessagesQuery(params),
    ...options,
  });
};

export const messagesLoader = async (params: IQueryParams = defaultParams) =>
  queryClient.ensureQueryData(getMessagesQuery(params));
