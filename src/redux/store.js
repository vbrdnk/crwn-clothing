import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {fetchCollectionsStart} from './shop/shop.saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware);

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(fetchCollectionsStart);
