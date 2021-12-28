import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../Api/request';

const initialState = {
  status: 'idle',
  user: null,
}


export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  const res = await request({
    url: '/auth/user',
    method: 'GET',
  })

  if (res.data) {
    return res.data
  }
  return null
})

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  const res = await request({
    method: 'POST',
    url: '/auth/login',
    data: { email, password }
  })

  if (res.success) {
    return res.data
  }
  throw new Error('something went wrong')

})



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null
    }
  },
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUserInfo.fulfilled]: (state, action) => {
      state.status = 'done';
      state.user = action.payload;
    },
    [fetchUserInfo.rejected]: (state) => {
      state.status = 'error';
    },
    [login.fulfilled]: (state, action) => {
      const { username, token, _id, avatar } = action.payload;
      localStorage.setItem('token', token);
      state.user = {
        username,
        _id,
        avatar
      }
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer