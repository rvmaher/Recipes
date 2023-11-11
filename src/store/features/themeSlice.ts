import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Colors} from '../../constants/colors';

type Theme = {themeColor: string};

const initialState: Theme = {
  themeColor: Colors[0],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
    },
  },
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
