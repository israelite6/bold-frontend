import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
}
export default function Button(props: IButton) {
  return <ButtonStyled>{props.children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  color: red;
`;
