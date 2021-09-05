import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
        name: 'app',

        initialState: {
            isBusy: false
        },

        reducers:
        {
            setIsBusy: (state, action) => {
                state.isBusy = true;
            },

            unsetIsBusy: (state, action) => {
                state.isBusy = false;
            }

        }
    }
)

export const { setIsBusy, unsetIsBusy } = appSlice.actions;
export default appSlice.reducer;
