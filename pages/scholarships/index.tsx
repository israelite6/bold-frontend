import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { Button, Select } from "../../components/atom";
import { ScholarshipItem, TitleSection } from "../../components/molecule";
import MainLayout from "../../components/molecule/layout/MainLayout";
import { CAN_CREATE_SCHOLARSHIP } from "../../config/permissions";
import { useAcl, useGetScholarships } from "../../hooks";
import { IScholarship } from "../../services/api.interface";
import { calculatePaginationButton } from "../../utils/helper";

export default function Scholarships() {
  const router = useRouter();
  const { handleAcl } = useAcl();

  const {
    data: { scholarships, meta },
    handleChangePagination,
    page,
  } = useGetScholarships();

  const paginationButton = useMemo(() => {
    return calculatePaginationButton(meta.total, meta.perPage);
  }, [meta]);

  const handleGotoCreateScholarship = useCallback(() => {
    router.push("/scholarships/add");
  }, []);
  return (
    <MainLayout>
      <TitleSection />
      <FiftySixPxSpace />
      {handleAcl(CAN_CREATE_SCHOLARSHIP) && (
        <ButtonWrapper>
          <Button onClick={handleGotoCreateScholarship}>Add</Button>
        </ButtonWrapper>
      )}

      <ItemsWrapper>
        {scholarships.map(
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

        <SelectWrapper>
          <Select onChange={handleChangePagination} value={page}>
            {paginationButton.map((item: number) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </SelectWrapper>
        <ClearFloat />
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

const SelectWrapper = styled.div`
  width: 100px;
  float: right;
`;

const ClearFloat = styled.div`
  clear: both;
`;
