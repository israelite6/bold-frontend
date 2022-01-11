import styled from "@emotion/styled";
import { GREY, TEXT_PRIMARY, WHITE } from "../../config/colors";
import { IScholarship } from "../../services/api.interface";
import { Avatar, Text } from "../atom";
import { ScholarshipMeta } from "../compound";

export default function ScholarshipItem({
  title,
  description,
  fundedBy,
  closeAt,
  amount,
}: IScholarship) {
  return (
    <Wrapper>
      <FeatureImage />
      <ContentWrapper>
        <Title>{title}</Title>
        <AuthorWrapper>
          <Text color="tertiary">Funded by</Text>
          <StyledAvatar size={"small"} />
          <Text color="primary">{fundedBy}</Text>
        </AuthorWrapper>
        <Text>{description}</Text>
      </ContentWrapper>
      <ScholarshipMeta {...{ closeAt, amount }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 20px;
  background-color: ${WHITE};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const FeatureImage = styled.div`
  min-width: 162px;
  height: 129px;
  background-color: ${GREY};
  margin-right: 24px;
`;

const ContentWrapper = styled.div`
  padding-right: 28px;
  flex-grow: 1;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 125%;
  color: ${TEXT_PRIMARY};
`;

const AuthorWrapper = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledAvatar = styled(Avatar)`
  margin-left: 8px;
  margin-right: 8px;
`;

const MetaSection = styled.div`
  width: 215px;
  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.07);
`;
