import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { MessageLogs } from "./MessageLogs";
import { useMessagesQuery } from "../infrastructure";

export const MessageLogsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useMessagesQuery();

  return (
    <>
      <Button
        onClick={onOpen}
        position="fixed"
        top={{ base: "auto", md: "3" }}
        bottom={{ base: "3", md: "auto" }}
        right={{ base: "3", md: "70" }}
        colorScheme="blue"
        zIndex="10"
      >
        View Logs
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xl"
        variant="permanent"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notification Logs</DrawerHeader>

          <DrawerBody>
            <MessageLogs logs={data ? data : []} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
