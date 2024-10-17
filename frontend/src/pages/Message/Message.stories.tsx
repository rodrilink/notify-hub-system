import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { MessagePage as Component } from "./index";
import { messagePageLoader } from "../Message/loader";

const meta = {
  title: "pages/Message",
  component: Component,
  parameters: {
    layout: "centered",
    reactRouter: {
      loader: messagePageLoader,
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
