import styled from "@emotion/styled";
import { ReactNode } from "react";
import NavBar from "../NavBar";
import { LIGHT_BACKGROUND } from "../../../config/colors";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${LIGHT_BACKGROUND};
  min-height: 100vh;
`;
