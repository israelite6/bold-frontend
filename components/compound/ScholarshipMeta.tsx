import styled from "@emotion/styled";
import CalendarIcon from "./../../icons/calendar.svg";
import MoneyIcon from "./../../icons/money.svg";
import { Button, Text } from "../atom";
import { getCurrencyFormat } from "../../utils/helper";

interface IScholarshipMeta {
  closeAt: string;
  amount: number;
}

export default function ScholarshipMeta({ closeAt, amount }: IScholarshipMeta) {
  return (
    <Wrapper>
      <ItemWrapper>
        <CalendarIcon />
        <ContentWrapper>
          <Text color="grey">Deadline</Text>

          <Text color="primary" fontWeight={600} fontSize={"16px"}>
            {new Date(closeAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </Text>
        </ContentWrapper>
      </ItemWrapper>
      <SpaceBetween />
      <ItemWrapper>
        <MoneyIcon />
        <ContentWrapper>
          <Text color="grey">Amount</Text>

          <Text color="primary" fontWeight={600} fontSize={"16px"}>
            ${getCurrencyFormat(amount)}
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
