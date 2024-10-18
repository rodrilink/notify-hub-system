import { IMessageLog } from "modules/message/types";

export const parseLog = (log: string): IMessageLog => {
  const parts = log.split("|");

  return {
    date: parts[0],
    category: parts[1],
    channel: parts[2],
    contact: parts[3], // phone, email, or ID
    userId: parts[4],
    username: parts[5],
    message: parts[6],
  };
};
