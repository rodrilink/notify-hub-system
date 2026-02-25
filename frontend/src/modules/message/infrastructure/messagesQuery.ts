import { UseQueryOptions } from "@tanstack/react-query";
import { buildUrl, httpService, useQuery } from "utils";
import { IMessageLog } from "../types";
import { parseLog } from "utils/logger";

export const useMessagesQuery = (options?: UseQueryOptions<IMessageLog[]>) => {
  return useQuery({
    queryKey: ["message"],
    queryFn: (): Promise<IMessageLog[]> =>
      httpService
        .getText(buildUrl("message/logs"), {
          headers: { "Content-Type": "text/plain" },
        })
        .then((res) => {
          return res
            .split("\n")
            .map(parseLog)
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
        })
        .catch((reason) => {
          return [];
        }),
    ...options,
  });
};
