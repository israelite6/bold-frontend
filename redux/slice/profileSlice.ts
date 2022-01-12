import { RootState } from "./../store";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProfileData {
  isLoggedIn: boolean;
  user: IUserData | null;
}

interface IUserData {
  userName?: string;
  emailAddress?: string;
  role?: "ADMIN" | "USER";
  id?: number;
  permissions: any;
}

const initialState: IProfileData = { isLoggedIn: false, user: null };

export const profileSlice = createSlice<IProfileData, any>({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfileAction(
      state: IProfileData,
      { payload }: PayloadAction<IUserData>
    ): any {
      state.user = payload;
      state.isLoggedIn = true;
    },
    logoutAction(state: IProfileData): any {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setProfileAction, logoutAction } = profileSlice.actions;

export const getIsLoggedInSelector = (state: RootState): boolean => {
  return state.profile.isLoggedIn;
};
export const getUserSelector = (state: RootState): IUserData | null => {
  return state.profile.user;
};

export default profileSlice.reducer;
