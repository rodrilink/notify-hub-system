import { chakra } from "@chakra-ui/react";

import { Outlet } from "shared/Router";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { MessageLogsDrawer } from "modules/message/presentation";

export const Layout = () => {
  return (
    <chakra.main height="100vh">
      <Navbar />
      <chakra.div
        pt={{ base: 20, md: 24 }}
        pb={{ base: 4, md: 6 }}
        height="calc(100vh - 144px)"
      >
        <Outlet />
      </chakra.div>
      <MessageLogsDrawer />
      <Footer />
    </chakra.main>
  );
};
