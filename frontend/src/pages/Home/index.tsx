import { Page } from "shared/Layout";
import { InternalErrorResult } from "shared/Result";
import { useRouteError } from "shared/Router";

import { HeroSection } from "modules/home/presentation";
import { useMessagesQuery } from "modules/message/infrastructure/";

const HomePage = () => {
  const { data } = useMessagesQuery();

  return (
    <Page maxW="container.xl" spacing={{ base: 8, lg: 20 }}>
      <HeroSection />
    </Page>
  );
};

export const Component = HomePage;

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return <HomePage />;
  }

  return <InternalErrorResult />;
};
