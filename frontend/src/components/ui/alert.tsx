import { Alert as ChakraAlert } from "@chakra-ui/react";

interface AlertProps {
  status: "error" | "warning" | "success" | "info";
  title: string;
  description: string;
}

export const Alert = ({ status, title, description }: AlertProps) => {
  return (
    <ChakraAlert.Root status={status}>
      <ChakraAlert.Indicator />
      <ChakraAlert.Content>
        <ChakraAlert.Title>{title}</ChakraAlert.Title>
        <ChakraAlert.Description>{description}</ChakraAlert.Description>
      </ChakraAlert.Content>
    </ChakraAlert.Root>
  );
};