//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
interface LikeDislikePayload {
  newsId: string;
  action: "like" | "dislike";
}

interface News {
  title: string;
  description: string;
  category: string;
  author: string;
  urlToImage: string;
  url: string;
  puplishedAt: string;
  source: {
    name: string;
    id: string;
  };
  id: string;
  like: number;
  dislike: number;
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
export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id, { getState }) => {
    try {
      await axios.delete(`http://localhost:3000/articles/${id}`);

      const currentState = getState() as RootState;
      const updatedNews = currentState.news.news.filter(
        (item) => item.id !== id
      );

      return updatedNews;
    } catch (error) {
      throw new Error("Failed to delete news");
    }
  }
);
export const addNews = createAsyncThunk("news/addNews", async (newItem) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/articles`,
      newItem
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add news");
  }
});
export const likeDislikeNews = createAsyncThunk(
  "news/likeDislikeNews",
  async (payload: LikeDislikePayload) => {
    try {
      const { newsId, action } = payload;

      await axios.patch(`http://localhost:3000/articles/${newsId}`);

      return { newsId, action };
    } catch (error) {
      throw new Error("Failed to like/dislike news");
    }
  }
);

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
    builder.addCase(deleteNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(deleteNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete news";
    });
    builder.addCase(addNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news.push(action.payload);
    });

    builder.addCase(likeDislikeNews.fulfilled, (state, action) => {
      const { newsId, action: likeDislikeAction } = action.payload;

      state.news = state.news.map((item) => {
        if (item.id === newsId) {
          if (likeDislikeAction === "like") {
            return { ...item, like: (item.like || 0) + 1 };
          } else if (likeDislikeAction === "dislike") {
            return { ...item, dislike: (item.dislike || 0) + 1 };
          }
        }
        return item;
      });
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = newsSlice.actions;

export default newsSlice.reducer;
