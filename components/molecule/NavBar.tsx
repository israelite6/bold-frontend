import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { WHITE } from "../../config/colors";
import { useAuth } from "../../hooks";
import { useAppDispatch } from "../../hooks/redux";
import { logoutAction } from "../../redux/slice/profileSlice";
import { eraseCookie } from "../../utils/cookies";
import { Button } from "../atom";
import { UserLogout } from "../compound";

export default function NavBar() {
  const { handleLogout } = useAuth();

  return (
    <Wrapper>
      <Image src={"/logo.png"} width={133} height={25} alt="logo" />
      <UserLogout onClick={handleLogout} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 21px 12px 90px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
  background-color: ${WHITE};
`;
