import { ERole } from "../config/constants";
import { getUserSelector } from "./../redux/slice/profileSlice";
import { useAppSelector } from "./redux";
export default function useAcl() {
  const user = useAppSelector(getUserSelector);

  const handleAcl = (permission: string) => {
    if (
      user &&
      (user.role === ERole.ADMIN || user.role === user.permissions[permission])
    ) {
      return true;
    }
    return false;
  };

  return { handleAcl };
}
