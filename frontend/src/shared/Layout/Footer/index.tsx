import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo";

export const Footer = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bg} color={color}>
      <Container as={Stack} maxW="1340px" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 3fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={4}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize="sm">
              © {new Date().getFullYear()} Notification Test.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
