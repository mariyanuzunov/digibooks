import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";

const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getBooks = createAsyncThunk("book/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    return await bookService.getAll(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (buiilder) => {
    buiilder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookSlice.actions;

export default bookSlice.reducer;
