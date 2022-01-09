import styled from "@emotion/styled";
import { ReactNode } from "react";
import { PRIMARY, WHITE } from "../../config/colors";

interface IButtonStyled {
  fullWidth?: boolean | undefined;
}
interface IButton extends IButtonStyled {
  children: ReactNode;
}
export default function Button({ children, fullWidth }: IButton) {
  return <ButtonStyled {...{ fullWidth }}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: ${PRIMARY};
  color: ${WHITE};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  font-weight: 500;
  border-radius: 4px;
  width: ${(props: IButtonStyled) => (props.fullWidth ? "100%" : "")};
  justify-content: center;
`;
