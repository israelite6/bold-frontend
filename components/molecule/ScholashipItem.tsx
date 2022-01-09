import styled from "@emotion/styled";
import { GREY, TEXT_PRIMARY, WHITE } from "../../config/colors";
import { Avatar, Text } from "../atom";
import { ScholarshipMeta } from "../compound";

export default function ScholarshipItem() {
  return (
    <Wrapper>
      <FeatureImage />
      <ContentWrapper>
        <Title>Scholarship for students who lorem ipsum</Title>
        <AuthorWrapper>
          <Text color="tertiary">Funded by</Text>
          <StyledAvatar size={"small"} />
          <Text color="primary">Matthew J. Bradford</Text>
        </AuthorWrapper>
        <Text>
          ESED scholars are exceptional students from developing countries
          studying in sustainable energy development. Today, the need for
          globally-oriented practitioners and researchers is ...
        </Text>
      </ContentWrapper>
      <ScholarshipMeta />
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
