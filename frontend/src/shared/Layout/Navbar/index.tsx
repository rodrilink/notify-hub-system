import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "shared/Router";

import { ToggleModeButton } from "../ToggleModeButton";
import { DesktopNav } from "./DesktopNav";
import { LoaderBar } from "./LoaderBar";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box w="100%" position="fixed" zIndex="10">
      <Flex
        w="100%"
        minH="60px"
        py={2}
        px={4}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        bg={bg}
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={Link}
            to="/"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight="extrabold"
          >
            Notify Hub System
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <HStack direction={"row"} spacing={4}>
          <ToggleModeButton />
        </HStack>
      </Flex>
      <LoaderBar />
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
