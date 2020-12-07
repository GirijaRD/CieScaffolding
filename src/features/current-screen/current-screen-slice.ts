import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import currenScreenInitialState from "../current-screen/current-screen-initial-stage";

export const CurrentScreenSlice = createSlice({
  name: "currentScreen",
  initialState: currenScreenInitialState,
  reducers: {
    setActiveScreen: setActiveScreen
  }
});

function setActiveScreen(state: any, action: any) {
  state.currentScreen = action.payload;
}
