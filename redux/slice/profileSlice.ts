import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProfileData {
  loggedIn: boolean;
  userName?: string;
  emailAddress?: string;
  role?: "ADMIN" | "USER";
  id?: number;
}

export const profileSlice = createSlice<IProfileData, any>({
  name: "profile",
  initialState: { loggedIn: false },
  reducers: {
    setProfileAction: (
      state: any,
      { payload }: PayloadAction<IProfileData>
    ) => {
      Object.assign(state, payload, { loggedIn: true });
    },
  },
});

export const { setProfileAction } = profileSlice.actions;

export default profileSlice.reducer;
