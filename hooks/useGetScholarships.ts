import { IGetScholarshipResponse } from "./../services/api.interface";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { api } from "../services/api";
import { IScholarship } from "../services/api.interface";

export default function useGetScholarships() {
  const [page, setPage] = useState<number>(1);
  const {
    isLoading,
    data = { scholarships: [], meta: { total: 0, perPage: 1 } },
  } = useQuery(["scholarships", { page }], api.getScholarships, {
    keepPreviousData: true,
  });

  const datas = data as unknown as IGetScholarshipResponse;

  const handleChangePagination = (event) => {
    setPage(event.target.value);
  };

  return { isLoading, data: datas, handleChangePagination, page };
}
