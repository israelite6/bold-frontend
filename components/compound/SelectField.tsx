import styled from "@emotion/styled";
import { Label, Select, Text } from "../atom";
import { ChangeEventHandler, ReactNode } from "react";
import { PRIMARY } from "../../config/colors";

interface ITextField {
  label: string;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  placeholder?: string;
  children?: ReactNode;
  error: string | boolean;
  touched: boolean;
}
export default function SelectField({ label, children, ...props }: ITextField) {
  return (
    <>
      <Label>{label}</Label>
      <SpaceBetween />
      <Select {...props}>{children}</Select>
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
