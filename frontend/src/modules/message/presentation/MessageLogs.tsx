import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { IMessageLog } from "../types";
import { dateVO } from "utils";
import { Fragment } from "react";

interface MessageLogsProps {
  logs: IMessageLog[];
}

export const MessageLogs = ({ logs }: MessageLogsProps) => {
  return (
    <Box p={1} overflowY="auto" maxH="80vh">
      {logs && logs.length > 0 ? (
        <Table
          size="sm"
          borderColor="gray.300"
          borderWidth="1px"
          variant="striped"
        >
          <Thead>
            <Tr height={10}>
              <Th>Timestamp</Th>
              <Th>Category</Th>
              <Th>Channel</Th>
              <Th>Contact</Th>
              <Th minWidth={20}>User ID</Th>
              <Th>Username</Th>
            </Tr>
          </Thead>
          <Tbody>
            {logs.map((log, index) => (
              <Fragment key={index}>
                <Tr
                  style={{
                    borderTop: "2px solid gray",
                  }}
                >
                  <Td>{dateVO.formatDateTime(log.date)}</Td>
                  <Td>{log.category}</Td>
                  <Td>{log.channel}</Td>
                  <Td>{log.channel === "PUSH" ? "-" : log.contact}</Td>
                  <Td>{log.userId}</Td>
                  <Td>{log.username}</Td>
                </Tr>
                <Tr
                  style={{
                    borderBottom: "2px solid gray",
                  }}
                >
                  <Td
                    colSpan={6}
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    <strong>Message: </strong>
                    {log.message}
                  </Td>
                </Tr>
              </Fragment>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Box>No logs available</Box>
      )}
    </Box>
  );
};
