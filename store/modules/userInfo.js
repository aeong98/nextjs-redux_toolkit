import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAuth } from "../../api/user";

export const fetchUserInfo=createAsyncThunk(
    'fetchUserInfo',
    async ()=>{
        const {userInfo}=UserAuth();
        try{
            const response = await userInfo();
            console.log(response.data);
            return response.data;
        }
        catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
);

const userInfoSlice=createSlice({
    name:"userInfo",
    initialState :{data:[{
        id:0,
        name:"sk",
        email:"sdlkfj@gmail.com"
    }], status:null},
    reducers:{
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers : {
        [fetchUserInfo.pending] : (state, action)=>{
            state.status= 'loading'
        },
        [fetchUserInfo.fulfilled] : (state, {payload})=>{
            state.data=payload
            state.status="success"
        },
        [fetchUserInfo.rejected] : (state, action)=>{
            state.status="failed"
        }
    }
})

export default userInfoSlice.reducer;