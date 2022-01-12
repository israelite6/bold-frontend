import {
  IGetProfileResponse,
  ILoginProps,
  ILoginResponse,
  IRegisterProps,
  IRegisterResponse,
  IGetScholarshipResponse,
  ICreateScholarshipProps,
} from "./api.interface";
import { httpRequest, httpUploadRequest } from "../utils/httpRequest";

const LOGIN_POST_URL = "/auth/login";
const SIGNUP_POST_URL = "/auth/register";
const GET_PROFILE_URL = "/users/profile";
const GET_SCHOLARSHIPS_URL = "/scholarships";
const CREATE_SCHOLARSHIPS_POST_URL = "/scholarships";

export const api = {
  login: async ({
    emailAddress,
    userPassword,
  }: ILoginProps): Promise<ILoginResponse> => {
    const response = await httpRequest({
      method: "POST",
      url: LOGIN_POST_URL,
      data: { emailAddress, userPassword },
    });
    console.log(response);
    return response;
  },

  register: async ({
    emailAddress,
    userPassword,
    userName,
    role,
  }: IRegisterProps): Promise<IRegisterResponse> => {
    const response = await httpRequest({
      method: "POST",
      url: SIGNUP_POST_URL,
      data: { emailAddress, userPassword, role, userName },
    });
    return response;
  },

  async getProfile(): Promise<IGetProfileResponse> {
    const response = await httpRequest({
      method: "GET",
      url: GET_PROFILE_URL,
    });
    return response;
  },
  async getScholarships({ queryKey }: any): Promise<IGetScholarshipResponse[]> {
    const [_key, { page }] = queryKey;
    console.log({ page });

    const response = await httpRequest({
      method: "GET",
      url: GET_SCHOLARSHIPS_URL,
      params: { page },
    });

    console.log(response);
    return response;
  },
  createScholarship: async (data: ICreateScholarshipProps) => {
    console.log(data);
    const response = await httpRequest({
      method: "POST",
      url: CREATE_SCHOLARSHIPS_POST_URL,
      data,
    });
    return response;
  },
};
