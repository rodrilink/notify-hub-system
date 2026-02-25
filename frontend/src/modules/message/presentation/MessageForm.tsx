import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { t } from "utils";
import { TextArea, Select } from "shared/Form";
import { useMessageNotifications } from "./useMessageNotifications";
import { sendMessage } from "../infrastructure";

export const MessageForm = () => {
  const [category, setCategory] = useState<string>("SPORTS");
  const [message, setMessage] = useState<string | undefined>();
  const messageMutation = sendMessage();

  const [notifySuccess, notifyFailure] = useMessageNotifications();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || !message) return;

    if (message.includes("|")) {
      notifyFailure("Invalid character: |");
      return;
    }

    await messageMutation.mutateAsync(
      { category, message },
      {
        onSuccess: () => {
          notifySuccess();
          setMessage("");
          setCategory("SPORTS");
        },
        onError: () => {
          notifyFailure();
        },
      }
    );
  };

  return (
    <VStack align="stretch" spacing={8} w="100%" maxW="lg">
      <VStack textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>
          {t("Send Notification ✌️")}
        </Heading>
      </VStack>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={{ base: 6, md: 8 }}
      >
        <VStack as="form" spacing={4} onSubmit={handleSubmit}>
          <Select
            id="method"
            options={[
              { label: "Sports", value: "SPORTS" },
              { label: "Finance", value: "FINANCE" },
              { label: "Movies", value: "MOVIES" },
            ]}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {t("Category")}
          </Select>
          <TextArea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          >
            {t("Message")}
          </TextArea>
          <VStack w="100%" spacing={10}>
            <Button type="submit" colorScheme="blue" w="100%">
              {t("Send")}
            </Button>
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
};
