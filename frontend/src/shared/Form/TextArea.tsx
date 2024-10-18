import { ReactNode, useEffect, useState } from "react";
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
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (props.value === "") {
      setIsTouched(false); // Reset touched state when form is cleared
    }
  }, [props.value]);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const isInvalid = isTouched && props.value === "";

  return (
    <FormControl id={id} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{children}</FormLabel>
      <Textarea {...props} onBlur={handleBlur} />
      {isInvalid && (
        <FormErrorMessage>{t("Field is required.")}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export { TextArea };
