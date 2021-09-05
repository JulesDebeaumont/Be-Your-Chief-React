import { createSlice } from '@reduxjs/toolkit'
import { setIsBusy, unsetIsBusy } from './app'
import { getPersonById, patchPerson, deletePerson, postPerson } from '../services/personAPI'

const personSlice = createSlice(
    {
        name: 'person',
        initialState: {
            person :{
                
            },
            viewPerson: null,
        },

        reducers:
        {
            setPersonById: (state, action) => {
                const person = action.payload;
                state.viewPerson = person;
                },

            updatePerson: (state, action) => {
                const updatedPerson = action.payload;
                let originalPerson = state.person[updatedPerson.id];

                originalPerson.firstName = updatedPerson.firstName;
                originalPerson.lastName = updatedPerson.lastName;

                state.viewPerson = originalPerson;
            },

            erasePerson: (state, action) => {
                const deletedPerson = action.payload;          
                
                delete state.person[deletedPerson.id];
            },

            newPerson: (state, action) => {
                const newPerson = action.payload;
                
                state.person[newPerson.id]=newPerson;
            }
        }
    }
);

const fetchPersonByIdTunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());                   
    const fetchedPerson = await getPersonById(id);
    dispatch(setPersonById(fetchedPerson));      
    dispatch(unsetIsBusy());                             
}

const patchPersonThunk = (person) => async (dispatch) => {
    dispatch(setIsBusy());                   
    const fetchedPerson = await patchPerson(person); 
    dispatch(updatePerson(fetchedPerson));      
    dispatch(unsetIsBusy());                             
}

const deletePersonThunk = (person) => async (dispatch) => {
    dispatch(setIsBusy());
    await deletePerson(person);
    dispatch(erasePerson(person));
    dispatch(unsetIsBusy());                            
}

const postPersonThunk = (person) => async (dispatch) => {
    dispatch(setIsBusy());
    const fetchedPerson = await postPerson(person);
    dispatch(newPerson(fetchedPerson));
    dispatch(unsetIsBusy());
}

export const { setPersonById, updatePerson, erasePerson, newPerson } = personSlice.actions;
export { fetchPersonByIdTunk, patchPersonThunk, deletePersonThunk, postPersonThunk };
export default personSlice.reducer;
