import { getIsLoggedInSelector } from "./../redux/slice/profileSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { useRouter } from "next/router";
import { eraseCookie } from "./../utils/cookies";
import { logoutAction } from "../redux/slice/profileSlice";
import { useEffect } from "react";
export default function useAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedInSelector);

  const handleLogout = () => {
    eraseCookie("token");
    dispatch(logoutAction());
    setTimeout(() => {});
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return { handleLogout };
}
