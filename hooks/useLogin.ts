import { setCookie } from "./../utils/cookies";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { api } from "../services/api";
import useGetProfile from "./useGetProfile";

export default function useLogin() {
  const { refetch } = useGetProfile();
  const { isLoading, mutate } = useMutation(api.login, {
    onSuccess: (response) => {
      if (!response) {
        return;
      }
      refetch();
      setCookie({ value: response.token, name: "token" });
    },
  });

  return { isLoading, mutate };
}
