import { rest } from "msw";

import { UserFixture } from "utils/fixtures";
import { host } from "utils/http";

import { GetResolver } from "./resolvers";

export const getMessagesHandler = (resolver?: GetResolver) =>
  rest.get(`${host}/message/logs`, (req, res, ctx) => {
    if (resolver) return resolver(req, res, ctx);

    return res(ctx.json(UserFixture.toStructure()));
  });
