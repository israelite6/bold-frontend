import styled from "@emotion/styled";
import { TEXT_PRIMARY, WHITE, PRIMARY } from "../../../config/colors";
import { useRegisterForm } from "../../../hooks";
import { Button } from "../../atom";
import { SelectField, TextField } from "../../compound";

export default function RegisterForm() {
  const { handleSubmit, fieldsMeta } = useRegisterForm();
  return (
    <FormContainer>
      <Title>create an account </Title>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full name"
          placeholder="Full name"
          {...fieldsMeta.userName}
        />
        <EightPxSpace />
        <TextField
          label="Email"
          placeholder="Email"
          {...fieldsMeta.emailAddress}
        />
        <EightPxSpace />
        <TextField
          label="Password"
          type="password"
          placeholder="Password"
          {...fieldsMeta.userPassword}
        />
        <EightPxSpace />
        <TextField
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          {...fieldsMeta.confirmPassword}
        />
        <EightPxSpace />
        <SelectField label="Role" {...fieldsMeta.role}>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </SelectField>
        <ThirtyPxSpace />
        <Button fullWidth type={"submit"}>
          Create Account
        </Button>
      </form>
      <ForgetPassword>Forget password?</ForgetPassword>
    </FormContainer>
  );
}

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

const ForgetPassword = styled.div`
  color: ${PRIMARY};
  font-size: 14px;
  padding-top: 20px;
  text-align: center;
`;
