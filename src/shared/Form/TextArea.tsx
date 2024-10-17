import { ReactNode } from "react";

import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  TextareaProps,
} from "@chakra-ui/react";

import { t } from "utils";

interface IProps extends TextareaProps {
  id: string;
  children: string | ReactNode;
  isRequired?: boolean;
}

const TextArea = ({ id, children, isRequired = true, ...props }: IProps) => {
  const isInvalid = props.value === "";

  return (
    <FormControl id={id} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{children}</FormLabel>
      <Textarea {...props} />
      {isInvalid && (
        <FormErrorMessage>{t("Field is required.")}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export { TextArea };
