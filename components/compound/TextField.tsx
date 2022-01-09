import styled from "@emotion/styled";
import { Input, Label } from "../atom";
import { ChangeEventHandler } from "react";

interface ITextField {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  type?: string;
}
export default function TextField({ label, ...props }: ITextField) {
  return (
    <>
      <Label>{label}</Label>
      <SpaceBetween />
      <Input {...props} />
    </>
  );
}

const SpaceBetween = styled.div`
  height: 8px;
`;
