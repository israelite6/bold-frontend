import styled from "@emotion/styled";
import { CreateScholarshipForm } from "../../components/molecule";
import MainLayout from "../../components/molecule/layout/MainLayout";
import { LIGHT_BACKGROUND } from "../../config/colors";

export default function Scholarships() {
  return (
    <MainLayout>
      <CreateScholarshipForm />
    </MainLayout>
  );
}

const ItemsWrapper = styled.div`
  padding: 56px 90px;
`;
