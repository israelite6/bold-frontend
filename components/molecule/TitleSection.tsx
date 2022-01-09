import styled from "@emotion/styled";
import { TEXT_PRIMARY, WHITE } from "../../config/colors";
import { Search } from "../compound";

export default function TitleSection() {
  return (
    <Wrapper>
      <Title>Scholarships</Title>
      <Search />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 38px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
  background-color: ${WHITE};
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: ${TEXT_PRIMARY};
`;
