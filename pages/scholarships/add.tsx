import { CreateScholarshipForm } from "../../components/molecule";
import MainLayout from "../../components/molecule/layout/MainLayout";
import { CAN_CREATE_SCHOLARSHIP } from "../../config/permissions";
import { useAcl } from "../../hooks";
import DefaultErrorPage from "next/error";

export default function Scholarships() {
  const { handleAcl } = useAcl();

  if (!handleAcl(CAN_CREATE_SCHOLARSHIP)) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <MainLayout>
      <CreateScholarshipForm />
    </MainLayout>
  );
}
