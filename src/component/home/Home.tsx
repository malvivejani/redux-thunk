import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {/* <div
                style={{
                    height: 100,
                    flexDirection: 'row',
                    display: 'flex',
                    backgroundColor: '#2ff',
                    justifyContent: 'flex-end',
                    paddingRight: 50
                }}>
                <Link to='/'>
                    <p style={{ marginRight: 20, fontSize: 30 }}>Home</p>
                </Link>
                <Link to='/posts'>
                    <p style={{ marginRight: 20, fontSize: 30 }}>Posts</p>
                </Link>
                <Link to='/users'>
                    <p style={{ marginRight: 20, fontSize: 30 }}>users</p>
                </Link>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: 'pink', flexGrow: 1 }}>
                Home component
            </div>
            <Outlet /> */}
            This is Home
        </div>
    )
}

export default Home;
