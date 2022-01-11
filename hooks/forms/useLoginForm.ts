import { useFormik } from "formik";
import { getIsTouched, getIsErrored } from "../../utils/helper";
import * as Yup from "yup";
import useLogin from "../useLogin";

interface ILoginData {
  emailAddress: string;
  userPassword: string;
}

export default function useRegisterForm() {
  const { mutate, isLoading } = useLogin();
  const {
    handleChange: onChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik<ILoginData>({
    initialValues: {
      emailAddress: "",
      userPassword: "",
    },
    validationSchema: Yup.object().shape({
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      userPassword: Yup.string().required("Password is required"),
    }),
    onSubmit: (res) => {
      mutate(res);
    },
  });

  const fieldsMeta = {
    emailAddress: {
      onChange,
      touched: getIsTouched(touched, "emailAddress"),
      error: getIsErrored(errors, "emailAddress"),
      name: "emailAddress",
    },
    userPassword: {
      onChange,
      touched: getIsTouched(touched, "userPassword"),
      error: getIsErrored(errors, "userPassword"),
      name: "userPassword",
    },
  };

  return { onChange, errors, touched, handleSubmit, fieldsMeta };
}
