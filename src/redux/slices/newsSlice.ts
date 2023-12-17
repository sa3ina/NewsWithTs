import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface News {
  title: string;
  origin: string;
  link: string;
  pubDate: string;
  image: string;
  related: [
    {
      title: string;
      url: string;
    }
  ];
}
interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  try {
    const response = await axios.get<News[]>(" http://localhost:3000/articles");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch news data");
  }
});
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch news";
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = newsSlice.actions;

export default newsSlice.reducer;
