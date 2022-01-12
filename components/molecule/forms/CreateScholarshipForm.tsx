import styled from "@emotion/styled";
import { TEXT_PRIMARY, WHITE, PRIMARY } from "../../../config/colors";
import { useCreateScholarshipForm } from "../../../hooks";
import { Button } from "../../atom";
import { SelectField, TextareaField, TextField } from "../../compound";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function CreateScholarshipForm() {
  const router = useRouter();
  const { handleSubmit, fieldsMeta } = useCreateScholarshipForm();

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);
  return (
    <Wrapper>
      <FormContainer>
        <Title>Create Scholarship</Title>
        <form onSubmit={handleSubmit}>
          <TextField label="Title" placeholder="Title" {...fieldsMeta.title} />
          <EightPxSpace />
          <TextareaField
            label="Description"
            placeholder="Description"
            {...fieldsMeta.description}
          />
          <EightPxSpace />
          <TextField
            label="Name of the Funder"
            placeholder="funder"
            {...fieldsMeta.fundedBy}
          />
          <EightPxSpace />
          <TextField
            label="Amount"
            type="number"
            placeholder="Amount"
            {...fieldsMeta.amount}
          />

          <EightPxSpace />
          <TextField
            label="Closing date"
            type="date"
            placeholder="Closing date"
            min={new Date().toISOString()}
            {...fieldsMeta.closeAt}
          />

          <ThirtyPxSpace />
          <ActionWrapper>
            <Button
              fullWidth
              variant="inverse"
              type="button"
              onClick={handleGoBack}
            >
              Back
            </Button>
            <Button fullWidth type={"submit"}>
              Create
            </Button>
          </ActionWrapper>
        </form>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: 20px;
  padding-bottom: 40px;
`;

const FormContainer = styled.div`
  padding: 40px 44px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background-color: ${WHITE};
  width: 432px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 125%;
  color: ${TEXT_PRIMARY};
  margin-bottom: 20px;
`;

const EightPxSpace = styled.div`
  height: 18px;
`;

const ThirtyPxSpace = styled.div`
  height: 30px;
`;

const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
