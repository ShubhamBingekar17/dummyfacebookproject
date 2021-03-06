import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './Redux/Reducer'

import App from './App';

const store = createStore(reducers , compose(applyMiddleware(thunk)))

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <Provider store={store}>
        <App />
    </Provider>
    </ChakraProvider>
);