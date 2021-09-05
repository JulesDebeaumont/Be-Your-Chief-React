import { createSlice } from '@reduxjs/toolkit'
import { setIsBusy, unsetIsBusy } from './app'
import { getAccountById } from '../services/accountAPI';

const accountSlice = createSlice(
    {
        name: 'account',
        initialState: {
            account :{
                recipies: 0,
                type: null,
            },
        },

        reducers:
        {
            setAccountRecipies: (state, action) => {
                const accountRecipies = action.payload;
                state.recipies = accountRecipies;
                },

            setAccountType: (state, action) => {
                const accountType = action.payload;
                state.type = accountType;
            }
        }
    }
);

const fetchAccountRecipiesThunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());
    const recipesNumber = await getAccountById(id);
    dispatch(setAccountRecipies(recipesNumber["recipes"].length));
    dispatch(unsetIsBusy());
}

const fetchAccountTypeThunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());
    const accountType = await getAccountById(id);
    console.log(accountType);
    dispatch(setAccountType(accountType['@type']));
    dispatch(unsetIsBusy());
}

export const { setAccountRecipies, setAccountType } = accountSlice.actions;
export { fetchAccountRecipiesThunk, fetchAccountTypeThunk };
export default accountSlice.reducer;