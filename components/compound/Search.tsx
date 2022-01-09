import styled from "@emotion/styled";
import { SEARCH_BACKGROUND, TEXT_SECONDARY } from "../../config/colors";
import { Input } from "../atom";
import SearchIcon from "./../../icons/search.svg";

export default function Search() {
  return (
    <Wrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>

      <StyledInput />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 214px;
  position: relative;
  height: 40px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 11px;
  left: 12px;
`;

const StyledInput = styled(Input)`
  background-color: ${SEARCH_BACKGROUND};
  border-color: white;
  color: ${TEXT_SECONDARY};
  padding-left: 40px;
`;
