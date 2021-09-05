import { createSlice } from "@reduxjs/toolkit";
import { setIsBusy, unsetIsBusy } from './app'
import { getUserById, getUserId, patchUserById } from '../services/userAPI';

const userSlice= createSlice({
    
    name:'user',
    initialState:
    {
        user: {
            id: null,
            login: null,
            isFetched: false,
            type: null,
        },

        userById : {}
    },
    reducers: {
        set: (state, action)=>{
            state.login=action.payload;
            state.isFetched= true;
        },

        disconnect: (state, action)=>{
            state.login= null;
            state.isFetched= true;
        },

        // route = /me
        setId: (state, action) => {
            state.user.id = action.payload.user;
            state.isFetched= true;
        },

        setUser: (state, action) => {
            state.userById = action.payload;
        },

        setUserType: (state, action) => {
            state.user.type = action.payload;
        },

        updateUser: (state, action) => {
            const updatedUser = action.payload;
            state.userById[updatedUser.id] = updatedUser;
        }
    }
})

const fetchUserIdThunk = () => async (dispatch) => {
    dispatch(setIsBusy());
    const userId = await getUserId();
    dispatch(setId(userId));
    dispatch(unsetIsBusy());
}

const fetchUserByIdThunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());
    const user = await getUserById(id);
    dispatch(setUser(user));
    dispatch(unsetIsBusy());
}

const fetchUserTypeByIdThunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());
    const user = await getUserById(id);
    dispatch(setUserType(user['@type']));
    dispatch(unsetIsBusy());
}

const patchUserByIdThunk = (merchant) => async (dispatch) => {
    dispatch(setIsBusy());
    const user = await patchUserById(merchant);
    dispatch(updateUser(user));
    dispatch(unsetIsBusy());
}

export const{ set , disconnect, setId, setUser, updateUser, setUserType } = userSlice.actions;
export { fetchUserIdThunk, fetchUserByIdThunk, patchUserByIdThunk , fetchUserTypeByIdThunk};
export default userSlice.reducer;
