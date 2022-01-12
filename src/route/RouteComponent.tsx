import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../component/home/Home'
import PostList from '../component/posts/PostList';
import UserList from '../component/user/UserList';
import Layout from '../component/layout/Layout'
import Learn from '../component/learn/Learn';

function RouteComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/posts' element={<PostList />} />
                </Route>
                <Route path="/redux-thunk-learn" element={<Learn />} />
            </Routes>

        </BrowserRouter>
    )
}

export default RouteComponent
