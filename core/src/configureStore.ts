import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import Config from './config';
import { rootSagas } from './root.saga';
import { IAppState, rootReducer } from './store';

const sagaMiddleware = createSagaMiddleware();

/**
 * Function to create initial store
 * @param initialState
 */
export default function configureStore<T>(
  customRootReducer?: Reducer<T & IAppState>,
  initialState?: IAppState & T,
  additionalsMiddlewares?: Middleware[],
  persistConfig?: PersistConfig,
) {
  let middlewares: Middleware[] = [
    ...[sagaMiddleware],
    ...additionalsMiddlewares,
  ];
  if (Config.getInstance().isDevMode()) {
    console.warn('Dev mode enabled');
    middlewares = [...middlewares, createLogger];
  }

  const reducer = persistConfig
    ? persistReducer(persistConfig, customRootReducer)
    : customRootReducer;

  const store = createStore(
    reducer,
    initialState ? initialState : {},
    compose(applyMiddleware(...middlewares)),
  );

  Object.assign(store, {
    // - Add close function to close the store
    close: () => store.dispatch(END),
  });
  const persistor = persistConfig ? persistStore(store) : null;
  return { store, persistor };
}

/**
 * Run Sagas for store
 * @param store
 */
export function runSagas(store: any) {
  sagaMiddleware.run(rootSagas);
}
