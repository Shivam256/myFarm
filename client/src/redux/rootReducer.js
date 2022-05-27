import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './slices/auth';
import query from './slices/query';


const authPersistConfig = {
    key: 'auth',
    storage,
    keyPrefix: 'redux-',
    blacklist: ['isLoggenIn']
  };

const rootReducer = combineReducers({
    auth:persistReducer(authPersistConfig, auth),
    query:query
})

export default rootReducer;