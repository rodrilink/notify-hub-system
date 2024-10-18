import type { Meta, StoryObj } from "@storybook/react";

import { MessageForm } from "./MessageForm";

const meta = {
  title: "modules/Message/MessageForm",
  component: MessageForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MessageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {};
