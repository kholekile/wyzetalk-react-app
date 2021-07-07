import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import rootReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import App from './App';
import './index.css';


const local = false //origin == 'http://localhost:3000'?true:false

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2
};

const pReducer = local?rootReducer :persistReducer(persistConfig, rootReducer);
//const persistedReducer = persistCombineReducers(persistConfig, reducer)
// App


const middlewares = [thunk];
var store = createStore(pReducer,undefined,applyMiddleware(...middlewares))
const persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
       <PersistGate persistor={persistor}>
         <App  />
      </PersistGate>
    </Provider>,document.getElementById('root')

 );

