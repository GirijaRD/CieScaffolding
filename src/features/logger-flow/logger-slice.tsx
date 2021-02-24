import { createSlice } from "@reduxjs/toolkit";
import LoggerInitialState from "./logger-initial-state";

const LoggerSlice=createSlice({
    name:"Logger",
    reducers:{
        Log
    },
    initialState:LoggerInitialState
})

function Log(){
        console.log("Logger function store");
}

export default LoggerSlice;
