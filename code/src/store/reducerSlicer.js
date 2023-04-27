import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: null,
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.RegisterData = action?.payload
    },
  },
});

export const {
  setData,
} = reducerSlicer.actions;
export default reducerSlicer.reducer;
