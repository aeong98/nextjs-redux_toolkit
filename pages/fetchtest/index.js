import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserAuth } from '../../api/user';
import { fetchUserInfo } from '../../store/modules/userInfo';

export default function index() {
    const value = useSelector(({userInfo}) =>userInfo);
    const {data, status} =value;
    const {userInfo} = UserAuth();
    const dispatch=useDispatch();

    const fetchTest = async()=>{
        const user = await dispatch(fetchUserInfo()).unwrap();
            // const user = await userInfo();
        console.log(user);
    }
    return <div>
        <h1>FetchTest</h1>
        <div>{data&&data[0].id}</div>
        <div>{data&&data[0].name}</div>
        <div>{data&&data[0].email}</div>
        <div>상태: {status&&status}</div>
        <button onClick={fetchTest}>API 테스트</button>
    </div>;
}
