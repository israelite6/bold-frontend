import styled from "@emotion/styled";
import Image from "next/image";
import { WHITE } from "../../config/colors";
import { Button } from "../atom";
import { UserLogout } from "../compound";

export default function NavBar() {
  return (
    <Wrapper>
      <Image src={"/logo.png"} width={133} height={25} alt="logo" />

      <UserLogout />
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
