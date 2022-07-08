import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getPredict } from '../lib/api/predict';

export interface HomeState {
  query: string;
  result: number[];
  status: 'idle' | 'loading' | 'failed' | 'done';
}

const initialState: HomeState = {
  query: '',
  result: [],
  status: 'idle',
};

export const fetchPredict = createAsyncThunk(
  'home/getPredict',
  async (query: string) => {
    const response = await getPredict(query);
    return response.result;
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetRequest: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredict.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPredict.fulfilled, (state, action) => {
        state.status = 'done';
        state.result = action.payload;
        state.query = action.meta.arg;
      })
      .addCase(fetchPredict.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetRequest } = homeSlice.actions;

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
