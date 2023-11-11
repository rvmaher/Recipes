import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type Auth = {user: FirebaseAuthTypes.User | null};

const initialState: Auth = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;

// slice.actions.increment(2);
// // also available:
// slice.caseReducers.increment(0, {type: 'increment', payload: 5});
