import styled from "@emotion/styled";
import { ReactNode } from "react";
import Image from "next/image";
import { LIGHT_BACKGROUND } from "../../../config/colors";

interface IAuthLayout {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <Wrapper>
      <div>
        <Image src={"/logo.png"} width={133} height={25} alt="logo" />
      </div>

      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${LIGHT_BACKGROUND};
  padding: 30px 40px;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${LIGHT_BACKGROUND};
  flex-grow: 1;
`;
