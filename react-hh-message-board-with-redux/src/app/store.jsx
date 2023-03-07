// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardReducer from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: {
    messageBoard: messageBoardReducer,
  },
});
