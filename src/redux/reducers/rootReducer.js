import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import bookmarkReducer from '../slices/bookmarkSlice';

const rootReducer = combineReducers({
  user: userReducer,
  bookmarks: bookmarkReducer,
});

export default rootReducer;
