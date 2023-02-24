import React from 'react';

import Layout from './layout';

import { Provider } from './context';

import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
