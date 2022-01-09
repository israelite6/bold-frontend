import styled from "@emotion/styled";
import { TEXT_SECONDARY } from "../../config/colors";
import { Avatar } from "../atom";

export default function UserLogout() {
  return (
    <Wrapper>
      <Avatar />
      <LogoutOutText>Logout</LogoutOutText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoutOutText = styled.div`
  color: ${TEXT_SECONDARY};
  font-weight: 500;
  padding-left: 18px;
`;
