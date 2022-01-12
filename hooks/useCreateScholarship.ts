import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { api } from "../services/api";

export default function useCreateScholarship() {
  const router = useRouter();
  const { isLoading, mutate } = useMutation(api.createScholarship, {
    onSuccess: (response) => {
      if (!response) {
        return;
      }

      setTimeout(() => {
        router.back();
      }, 1000);
    },
  });

  return { isLoading, mutate };
}
