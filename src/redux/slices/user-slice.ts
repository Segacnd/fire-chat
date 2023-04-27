import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  email: string | null;
  id: string | null;
  token: string | null;
  avatar: string | null;
  userName: string;
};

const initialState: UserState = {
  email: null,
  id: null,
  token: null,
  avatar: null,
  userName: 'John Doe',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.avatar = action.payload.avatar;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { reducer: UserReducer, actions: userActions } = userSlice;
