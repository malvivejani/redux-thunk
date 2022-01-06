import React, { useEffect } from 'react';
import './App.css';
import UserList from './component/user/UserList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUser } from './redux/actions/UserActions';
// import { userListAction } from './redux/actions/UserActions';


function App() {

  // const user = useSelector((state: any) => state.userList);
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchUser())
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
