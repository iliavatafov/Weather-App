import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  errorData: {
    isError: false,
    message: "",
    title: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    openModal(state, action) {
      state[action.payload] = true;
    },
    closeModal() {
      return initialModalState;
    },
    setErrorData(state, action) {
      state.errorData = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
