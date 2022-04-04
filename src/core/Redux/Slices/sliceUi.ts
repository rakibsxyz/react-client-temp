import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumAppModal } from "../../../models";

type TModalTypeDescriptor<T extends EnumAppModal, D> = { type: T; data?: D };

type TModalData = TModalTypeDescriptor<EnumAppModal.Register, void>;

export type TSliceUi = {
  modal?: TModalData;
};

function InitSliceUi(): TSliceUi {
  return {};
}

const sliceUi = createSlice({
  name: "sliceUi",
  initialState: InitSliceUi(),
  reducers: {
    ModalOpen: (
      state: TSliceUi,
      action: PayloadAction<TModalData>
    ): TSliceUi => ({
      ...state,
      modal: action.payload,
    }),
    ModalClose: (state: TSliceUi): TSliceUi => ({
      ...state,
      modal: undefined,
    }),
  },
});

export const ReducerUi = sliceUi.reducer;
export const ActionUi = sliceUi.actions;
