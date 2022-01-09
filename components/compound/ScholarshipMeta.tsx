import styled from "@emotion/styled";
import CalendarIcon from "./../../icons/calendar.svg";
import MoneyIcon from "./../../icons/money.svg";
import { Button, Text } from "../atom";

export default function ScholarshipMeta() {
  return (
    <Wrapper>
      <ItemWrapper>
        <CalendarIcon />
        <ContentWrapper>
          <Text color="grey">Deadline</Text>

          <Text color="primary" fontWeight={600} fontSize={"16px"}>
            Dec 20, 2019
          </Text>
        </ContentWrapper>
      </ItemWrapper>
      <SpaceBetween />
      <ItemWrapper>
        <MoneyIcon />
        <ContentWrapper>
          <Text color="grey">Amount</Text>

          <Text color="primary" fontWeight={600} fontSize={"16px"}>
            $3,000
          </Text>
        </ContentWrapper>
      </ItemWrapper>
      <ThirtySixSpace />
      <Button fullWidth>Apply to scholarship</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 215px;
  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.07);
  padding: 6px 0px 0px 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding-left: 19px;
`;

const SpaceBetween = styled.div`
  height: 19px;
`;

const ThirtySixSpace = styled.div`
  height: 36px;
`;
