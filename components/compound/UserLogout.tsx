import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import { TEXT_SECONDARY } from "../../config/colors";
import { Avatar } from "../atom";

interface IUserLoggoutComponentProps {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function UserLogout(props: IUserLoggoutComponentProps) {
  return (
    <Wrapper {...props}>
      <Avatar />
      <LogoutOutText>Logout</LogoutOutText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LogoutOutText = styled.div`
  color: ${TEXT_SECONDARY};
  font-weight: 500;
  padding-left: 18px;
`;
