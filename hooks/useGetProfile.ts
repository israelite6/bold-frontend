import { useDispatch } from "react-redux";
import { useAppDispatch } from "./redux";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { api } from "../services/api";
import { setProfileAction } from "../redux/slice/profileSlice";

export default function useGetProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, refetch } = useQuery("profile", api.getProfile, {
    enabled: false,
    onSuccess: (response) => {
      if (!response) {
        return;
      }
      dispatch(setProfileAction(response));
    },
  });

  return { isLoading, refetch };
}
