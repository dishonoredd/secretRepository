import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FromType } from "./components/types/FormType";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type InitialFormType = {
  data: FromType;
};

const initialFormState: InitialFormType = {
  data: { name: "", surname: "", otchestvo: "" },
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    setUser: (state, action: PayloadAction<FromType>) => {
      state.data = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    formSlice: formSlice.reducer,
  },
});
export const { setUser } = formSlice.actions;
