// eslint-disable-next-line no-restricted-imports
import { RouterProvider } from "react-router-dom";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { router } from "pages/router";

function App() {
  return <RouterProvider router={router} />;
}

export { App };
