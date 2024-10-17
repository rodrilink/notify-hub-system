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

  const failure = () =>
    toast({
      status: "error",
      title: t("Error"),
      description: t(
        "An error occurred while sending your message. Please try again."
      ),
    });

  return [success, failure] as const;
};
