import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Button } from "../../components/atom";
import {
  NavBar,
  ScholarshipItem,
  TitleSection,
} from "../../components/molecule";
import MainLayout from "../../components/molecule/layout/MainLayout";
import { LIGHT_BACKGROUND } from "../../config/colors";
import { useGetScholarships } from "../../hooks";
import { IScholarship } from "../../services/api.interface";

export default function Scholarships() {
  const router = useRouter();

  const { data } = useGetScholarships();

  const handleGotoCreateScholarship = useCallback(() => {
    router.push("/scholarships/add");
  }, []);
  return (
    <MainLayout>
      <TitleSection />
      <FiftySixPxSpace />
      <ButtonWrapper>
        <Button onClick={handleGotoCreateScholarship}>Add</Button>
      </ButtonWrapper>
      <ItemsWrapper>
        {data.scholarships.map(
          ({
            id,
            title,
            description,
            closeAt,
            amount,
            fundedBy,
          }: IScholarship) => (
            <ScholarshipItem
              key={id}
              {...{ title, description, closeAt, amount, fundedBy }}
            />
          )
        )}
      </ItemsWrapper>
    </MainLayout>
  );
}

const ItemsWrapper = styled.div`
  padding: 10px 90px;
`;

const FiftySixPxSpace = styled.div`
  height: 50px;
`;

const ButtonWrapper = styled.div`
  padding: 16px 90px 0px 90px;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
