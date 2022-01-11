import { useFormik } from "formik";
import { getIsTouched, getIsErrored } from "../../utils/helper";
import * as Yup from "yup";

interface ICreateScholarshipData {
  title: string;
  description: string;
  funder: string;
  amount: string;
  closeAt: string;
}

export default function useCreateScholarshipForm() {
  const {
    handleChange: onChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik<ICreateScholarshipData>({
    initialValues: {
      title: "",
      description: "",
      funder: "",
      amount: "",
      closeAt: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required").max(200),
      description: Yup.string().required("Description is required").max(10000),
      funder: Yup.string().required("Funder is required").max(200),
      amount: Yup.number().required("Amount is required"),
      closeAt: Yup.string().required("Closing date is required").max(200),
    }),
    onSubmit: (res) => {
      console.log(res);
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
    funder: {
      onChange,
      touched: getIsTouched(touched, "funder"),
      error: getIsErrored(errors, "funder"),
      name: "funder",
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
