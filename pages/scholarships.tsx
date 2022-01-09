import styled from "@emotion/styled";
import { Avatar } from "../components/atom";
import { NavBar, ScholarshipItem, TitleSection } from "../components/molecule";
import { LIGHT_BACKGROUND } from "../config/colors";

export default function Scholarships() {
  return (
    <Wrapper>
      <NavBar />
      <TitleSection />
      <ItemsWrapper>
        <ScholarshipItem />
        <ScholarshipItem />
        <ScholarshipItem />
        <ScholarshipItem />
        <ScholarshipItem />
      </ItemsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${LIGHT_BACKGROUND};
  min-height: 100vh;
`;

const ItemsWrapper = styled.div`
  padding: 56px 90px;
`;
