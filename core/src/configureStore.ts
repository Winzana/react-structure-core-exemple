import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootSagas } from './root.saga';
import { IAppState, rootReducer } from './store';

const sagaMiddleware = createSagaMiddleware();

/**
 * Function to create initial store
 * @param initialState
 */
export default function configureStore(log: boolean, initialState?: IAppState) {
  let middlewares: Middleware[] = [sagaMiddleware];
  if (log) {
    middlewares = [...middlewares, createLogger];
  }
  const store = createStore(
    rootReducer,
    initialState ? initialState : {},
    compose(applyMiddleware(...middlewares)),
  );

  Object.assign(store, {
    // - Add close function to close the store
    close: () => store.dispatch(END),
  });
  return store;
}

/**
 * Run Sagas for store
 * @param store
 */
export function runSagas(store: any) {
  sagaMiddleware.run(rootSagas);
}
