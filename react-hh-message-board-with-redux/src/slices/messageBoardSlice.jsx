// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageText: "",
  messageTextArray: [],
};

export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    createMessageText: (state, action) => {
      state.messageText = action.payload;
    },
    addMessageText: (state) => {
      state.messageTextArray.push(state.messageText);
      state.messageText = ""; // reset the input form to be empty after the user click submit button
    },
    deleteMessageText: (state, action) => {
      state.messageTextArray.splice(action.payload, 1);
    },
  },
});

export const { createMessageText, addMessageText, deleteMessageText } =
  messageBoardSlice.actions;

export default messageBoardSlice.reducer;
