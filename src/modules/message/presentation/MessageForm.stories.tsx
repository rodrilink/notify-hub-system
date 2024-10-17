import { expect } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, screen } from "@storybook/test";

import { sleep } from "utils";

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

export const WithCredentialsFilledByDefault: Story = {
  args: {
    initialUsername: "johndoe",
    initialPassword: "supersecret",
  },
};

export const SigningIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter data", async () => {
      await userEvent.type(canvas.getByLabelText(/Username/), "johndoe");
      await userEvent.type(canvas.getByLabelText(/Password/), "supersecret");
    });

    await step("Submit form", async () => {
      await sleep(500);

      await userEvent.click(canvas.getByRole("button", { name: "Send" }));
      await sleep(500);
    });

    expect(
      await screen.findByText("Logged in successfully.")
    ).toBeInTheDocument();
  },
};
