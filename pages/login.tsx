import styled from "@emotion/styled";
import Image from "next/image";
import { LoginForm } from "../components/molecule";
import { LIGHT_BACKGROUND, PRIMARY } from "../config/colors";

export default function Login() {
  return (
    <Wrapper>
      <div>
        <Image src={"/logo.png"} width={133} height={25} alt="logo" />
      </div>

      <FormWrapper>
        <LoginForm />
      </FormWrapper>
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
