import { configureStore } from '@reduxjs/toolkit';
import { albumReducer } from './albumSlice';
import { artistReducer } from './artistSlice';
import { authReducer } from './authSlice';
import { lovedSongReducer } from './lovedSongSlice';
import { playerReducer } from './playerSlice';
import { searchReducer } from './searchSlice';
import { tagReducer } from './tagSlice';
import {trendingReducer} from './trendingSlice'

const store = configureStore({
   reducer: {
      auth: authReducer,
      search: searchReducer,
      tag: tagReducer,
      player: playerReducer,
      trending: trendingReducer,
      lovedSongs: lovedSongReducer,
      artist: artistReducer,
      album: albumReducer,
   },
});
export default store;
