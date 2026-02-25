import {
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "shared/Router";
import { useBrandColor, useSecondaryTextColor } from "theme";

const HeroSection = () => {
  const brandColor = useBrandColor();
  const textColor = useSecondaryTextColor();

  return (
    <Container maxW="3xl">
      <Stack
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        pt={{ base: 2 }}
        pb={{ base: 2 }}
      >
        <Heading
          fontWeight="extrabold"
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl" }}
          lineHeight={"110%"}
        >
          Welcome to <br />
          <Text as="span" color={brandColor}>
            Notify Hub System!
          </Text>
        </Heading>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color={textColor}>
          Welcome to Notify Hub System, your central platform for managing
          notifications across multiple channels! Here, you can easily send
          messages to subscribed users based on their preferences and
          categories. Get started by selecting a message category and entering
          your message. The system will handle the rest by delivering
          notifications via SMS, Email, or Push Notifications — all according to
          each user’s personalized settings.
        </Text>
        <VStack
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="orange"
            rounded="full"
            px={6}
            as={Link}
            to="/message"
          >
            Get Started
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export { HeroSection };
