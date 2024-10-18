import { t } from "utils";

import { useToast } from "shared/Toast";

export const useMessageNotifications = () => {
  const toast = useToast();

  const success = () =>
    toast({
      status: "success",
      title: t("Message sent"),
      description: t("Your message has been sent successfully."),
    });

  const failure = (reason?: string) =>
    toast({
      status: "error",
      title: t("Error"),
      description: reason
        ? `"An error occurred while sending your message. ${reason}`
        : t("An error occurred while sending your message. Please try again."),
    });

  return [success, failure] as const;
};
