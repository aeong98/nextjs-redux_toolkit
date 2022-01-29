import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name :'user',
    initialState: {value:{
        name:"Pedro",
        age: 0,
        email:"email@gmail.com",
    }},
    reducers:{
        login: (state,action)=>{
            state.value =action.payload;
        },
        logout: (state, action)=>{
            state.value ={name:"", age:0, email:""};
        }
    }
})
export const {login, logout} = userSlice.actions;
export default userSlice.reducer;