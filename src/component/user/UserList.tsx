import React, { useEffect } from 'react';
import { fetchUser } from '../../redux/actions/UserActions';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function UserList(props: any) {
    const user = useSelector((state: any) => state.userList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    }, []);

    return (
        <div>
            <p>User list</p>
            {
                user.isLoading ? <p>Loading </p> : (user.error ? <p>{user.error}</p> :
                    user && user.userList && user.userList.map((item: any, index: number) => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        )
                    }))
            }
            {
                console.log("props.data", user)
            }
        </div>
    )
}

export default UserList;
