import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { api } from "../services/api";

export default function useGetScholarships() {
  const [page, setPage] = useState<number>(1);
  const { isLoading, data = { scholarships: [] } } = useQuery(
    ["scholarships", { page }],
    api.getScholarships,
    {
      onSuccess: (response) => {
        if (!response) {
          return;
        }

        console.log(response);
      },
    }
  );

  return { isLoading, data };
}
