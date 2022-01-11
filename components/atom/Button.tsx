import styled from "@emotion/styled";
import { ReactNode, MouseEventHandler } from "react";
import { PRIMARY, WHITE } from "../../config/colors";

interface IButton {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  fullWidth?: boolean | undefined;
  variant?: "normal" | "inverse";
}
export default function Button({ children, ...props }: IButton) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: ${({ variant = "normal" }: IButton) =>
    variant === "normal" ? PRIMARY : WHITE};
  color: ${({ variant = "normal" }: IButton) =>
    variant === "normal" ? WHITE : PRIMARY};
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
  width: ${(props: IButton) => (props.fullWidth ? "100%" : "")};
  justify-content: center;
`;
