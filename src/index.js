import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from '@components/Application';
import store from '@store';

const App = () => <Application />;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('reactRoot'));
