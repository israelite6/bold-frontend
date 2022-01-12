import { useFormik } from "formik";
import { getIsTouched, getIsErrored } from "../../utils/helper";
import * as Yup from "yup";
import useCreateScholarship from "../useCreateScholarship";

interface ICreateScholarshipData {
  title: string;
  description: string;
  fundedBy: string;
  amount: string;
  closeAt: string;
}

export default function useCreateScholarshipForm() {
  const { mutate } = useCreateScholarship();
  const {
    handleChange: onChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik<ICreateScholarshipData>({
    initialValues: {
      title: "",
      description: "",
      fundedBy: "",
      amount: "",
      closeAt: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required").max(200),
      description: Yup.string().required("Description is required").max(10000),
      fundedBy: Yup.string().required("Funder is required").max(200),
      amount: Yup.number().required("Amount is required"),
      closeAt: Yup.string().required("Closing date is required").max(200),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const fieldsMeta = {
    title: {
      onChange,
      touched: getIsTouched(touched, "title"),
      error: getIsErrored(errors, "title"),
      name: "title",
    },
    description: {
      onChange,
      touched: getIsTouched(touched, "description"),
      error: getIsErrored(errors, "description"),
      name: "description",
    },
    fundedBy: {
      onChange,
      touched: getIsTouched(touched, "fundedBy"),
      error: getIsErrored(errors, "fundedBy"),
      name: "fundedBy",
    },
    amount: {
      onChange,
      touched: getIsTouched(touched, "amount"),
      error: getIsErrored(errors, "amount"),
      name: "amount",
    },
    closeAt: {
      onChange,
      touched: getIsTouched(touched, "closeAt"),
      error: getIsErrored(errors, "closeAt"),
      name: "closeAt",
    },
  };

  return { onChange, handleSubmit, fieldsMeta };
}
