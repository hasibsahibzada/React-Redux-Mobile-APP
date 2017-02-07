import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import ons from 'onsenui';
import React from 'react';
import { render } from 'react-dom';
import 'onsenui/css/onsenui.css';

const rootElement = document.getElementById('root');
const store = configureStore();

ons.ready(() => render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
  rootElement
));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      rootElement
    );
    });
}

render(
    <AppProvider store={store} />,
    document.getElementById('root')
);