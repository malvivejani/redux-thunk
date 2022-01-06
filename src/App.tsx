import React, { useEffect } from 'react';
import './App.css';
import UserList from './component/user/UserList';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouteComponent from './route/RouteComponent';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RouteComponent />
      </div>
    </Provider>
  );
}

export default App;
