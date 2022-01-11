import { useFormik } from "formik";
import { getIsTouched, getIsErrored } from "../../utils/helper";
import * as Yup from "yup";
import useRegister from "../useRegister";

interface IRegisterData {
  emailAddress: string;
  userPassword: string;
  confirmPassword: string;
  userName: string;
  role: "ADMIN" | "USER";
}

export default function useRegisterForm() {
  const { isLoading, mutate } = useRegister();
  const {
    handleChange: onChange,
    errors,
    touched,
    handleSubmit,
    values,
  } = useFormik<IRegisterData>({
    initialValues: {
      emailAddress: "",
      userPassword: "",
      confirmPassword: "",
      userName: "",
      role: "ADMIN",
    },
    validationSchema: Yup.object().shape({
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      userPassword: Yup.string().required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("userPassword"), null],
        "Passwords must match"
      ),
      userName: Yup.string().required("Name is required"),
    }),
    onSubmit: (res) => {
      const { confirmPassword, ...data } = res;
      mutate(data);
    },
  });

  const fieldsMeta = {
    userName: {
      onChange,
      touched: getIsTouched(touched, "userName"),
      error: getIsErrored(errors, "userName"),
      name: "userName",
    },
    userPassword: {
      onChange,
      touched: getIsTouched(touched, "userPassword"),
      error: getIsErrored(errors, "userPassword"),
      name: "userPassword",
    },
    confirmPassword: {
      onChange,
      touched: getIsTouched(touched, "confirmPassword"),
      error: getIsErrored(errors, "confirmPassword"),
      name: "confirmPassword",
    },
    emailAddress: {
      onChange,
      touched: getIsTouched(touched, "emailAddress"),
      error: getIsErrored(errors, "emailAddress"),
      name: "emailAddress",
    },
    role: {
      onChange,
      touched: getIsTouched(touched, "role"),
      error: getIsErrored(errors, "role"),
      name: "role",
    },
  };

  return { onChange, errors, touched, handleSubmit, fieldsMeta };
}
