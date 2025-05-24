import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenBurgerModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpenBurgerModal: (state, action) => {
      state.isOpenBurgerModal = action.payload;
    },
  },
});

export const { setIsOpenBurgerModal } = modalSlice.actions;
export default modalSlice.reducer;
