import { Center } from "@chakra-ui/react";

import { Page } from "shared/Layout";
import { ErrorPageStrategy } from "shared/Result";

import { MessageForm } from "modules/message/presentation";

export const MessagePage = () => {
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
