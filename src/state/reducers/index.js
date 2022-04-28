import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// IMPORT REDUCERS
import authReducer from "./auth";
import portfolioReducer from "./portfolio";
import alertReducer from "./alert";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// COMPOSE FOR DUBUG PURPOSE
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
const rootReducer = combineReducers({
  authReducer,
  portfolioReducer,
  alertReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["salaryReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// CREATE STORE
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
export const persistor = persistStore(store);
