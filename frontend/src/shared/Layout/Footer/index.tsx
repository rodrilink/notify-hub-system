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
          <Stack spacing={3}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize="sm">
              © {new Date().getFullYear()} Notification Test.
            </Text>
          </Stack>

          {/* Additional Column for Thank You message */}
          <Stack spacing={44} align="flex-end">
            <Text fontSize="sm" fontStyle="italic">
              Thank you for the opportunity to participate in this position. I
              look forward to the possibility of contributing to your team and
              continuing to grow professionally.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
