import axios from "axios";
import { getCookie } from "./cookies";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/constants";

interface HttpRequestParamsInterface {
  method: string | undefined;
  data?: object;
  params?: object;
  url: string;
}

export const axiosInstance = () => {
  return axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const httpRequest = async ({ method, data, params, url }: any) => {
  try {
    const response = await axiosInstance()({ method, data, params, url });

    if (method === "POST" || method === "PUT" || method === "DELETE") {
      toast(response.data.data.description, { type: "success" });
    }
    return response.data.data;
  } catch (e: any) {
    console.log(e.response);
    if (method === "POST" || method === "PUT" || method === "DELETE") {
      if (e.response) {
        let message = "";
        let errorMessage = e.response.data.error;
        console.log(errorMessage);

        toast(
          Array.isArray(errorMessage)
            ? errorMessage.map((key) => key.msg).join("\n")
            : errorMessage,
          { type: "error" }
        );
      } else {
        toast(e.message, { type: "error" });
      }
    }
    throw e;
  }
};

export const httpUploadRequest = async ({ data, url }: any) => {
  try {
    var formData = new FormData();
    Object.keys(data).map((key) => formData.append(key, data[key]));
    const response = await axiosInstance()({
      method: "POST",
      url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast(response.data.data.description, { type: "success" });

    return response.data.data;
  } catch (e: any) {
    if (e.response) {
      let message = "";
      let errorMessage = e.response.data.message;
      console.log(errorMessage);

      toast(
        Array.isArray(errorMessage) ? errorMessage.join("\n") : errorMessage,
        { type: "error" }
      );
    } else {
      toast(e.message, { type: "error" });
    }
    throw e;
  }
};
