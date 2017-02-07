import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import sagas from '../sagas/index';
import weimarMoscheApp from '../reducers/weimarMoscheApp';

const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
    autoRehydrate(),
    applyMiddleware(
        routerMiddleware(browserHistory),
        createLogger({ collapsed: true }),
        sagaMiddleware
    )
)(createStore);

export default function configureStore(initialState) {
    const finalStore = finalCreateStore(weimarMoscheApp, initialState);
    sagas.map(saga => sagaMiddleware.run(saga));
    return finalStore;
}
