import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/login-service";

export const loginApiCall = createAsyncThunk(
  "login/logincall",
  async (loginobj: {}, thunkApi) => {
    let data = await authService(loginobj);
    return data;
  }
);
