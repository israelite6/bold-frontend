import styled from "@emotion/styled";
import { Input, Label, Text, Textarea } from "../atom";
import { ChangeEventHandler } from "react";

interface ITextField {
  label: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  placeholder?: string;
  error: string | boolean;
  touched: boolean;
}
export default function TextareaField({ label, ...props }: ITextField) {
  return (
    <>
      <Label>{label}</Label>
      <SpaceBetween />
      <Textarea {...props} />
      {props.touched && (
        <Text fontSize="11px" color={"danger"}>
          {props.error}
        </Text>
      )}
    </>
  );
}

const SpaceBetween = styled.div`
  height: 8px;
`;
