import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LoggerInitialState from "./logger-initial-state";

const LoggerSlice=createSlice({
    name:"Logger",
    reducers:{
        Log
    },
    initialState:LoggerInitialState
})

function Log(){
        
}

export default LoggerSlice;
