import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <p style={{ fontSize: 16 }} onClick={() => {
                navigate(`/redux-thunk-learn`);
            }}>Redux thunk demo page</p>
        </div>
    )
}

export default Home;
