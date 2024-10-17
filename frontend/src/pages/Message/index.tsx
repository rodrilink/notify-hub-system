import { Center } from "@chakra-ui/react";

import { Page } from "shared/Layout";
import { ErrorPageStrategy } from "shared/Result";

import { MessageForm } from "modules/message/presentation";
import { useMessagesQuery } from "modules/message/infrastructure/";

export const MessagePage = () => {
  const { data } = useMessagesQuery();

  return (
    <Page maxW="container.xl">
      <Center py={{ base: 10, md: 12 }}>
        <MessageForm />
      </Center>
    </Page>
  );
};

export const Component = MessagePage;

export const ErrorBoundary = ErrorPageStrategy;
