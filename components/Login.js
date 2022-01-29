import { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import {login,logout} from "../store/modules/user";

export default function Login() {
    const [isLogin, setIsLogin]=useState(false);
    const dispatch = useDispatch();

    const LoginEvent = useCallback(()=>{  
        if(isLogin){
            dispatch(logout());
            setIsLogin(false);
        }
        else{
            dispatch(login({name:"Sarah", age:24, email:"sy9815@gmail.com"}));
            setIsLogin(true);
        }
    },[dispatch, isLogin]);

    return <div>
        <button onClick={LoginEvent}>{!isLogin? <span>Login</span> : <span>Logout</span>}</button>  
        </div>;
}

