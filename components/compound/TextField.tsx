import styled from "@emotion/styled";
import { Input, Label, Text } from "../atom";
import { ChangeEventHandler } from "react";
import { PRIMARY } from "../../config/colors";

interface ITextField {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  type?: string;
  error: string | boolean;
  touched: boolean;
  min?: any;
}
export default function TextField({ label, ...props }: ITextField) {
  return (
    <>
      <Label>{label}</Label>
      <SpaceBetween />
      <Input {...props} />
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
