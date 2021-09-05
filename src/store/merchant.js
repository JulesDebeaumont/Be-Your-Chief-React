import { createSlice } from '@reduxjs/toolkit';
import { setIsBusy, unsetIsBusy } from './app';
import { getMerchantById, patchMerchant, deleteMerchant, postMerchant, getAllMerchantSpecification, getAllMerchantType, deleteMerchantSchedule } from '../services/merchantAPI';

const merchantSlice = createSlice(
    {
        name: 'merchant',
        initialState: {
                merchant :{

                },
                viewMerchant: null,
                specifications: {

                },
                types: {

                }
        },

        reducers:
        {
            setMerchantById: (state, action) => {
                const merchant = action.payload;
                state.viewMerchant = merchant;
            },

            updateMerchant: (state, action) => {
                const updatedMerchant = action.payload;

                if (updatedMerchant.merchantSpecification !== undefined)
                {
                    return fetch("http://localhost:8000" + updatedMerchant.merchantSpecification)
                        .then((response) => response.json()); 
                }

                if (updatedMerchant.merchantType !== undefined)
                {
                    updatedMerchant.merchantType = () =>
                    {
                        return fetch("http://localhost:8000" + updatedMerchant.merchantType)
                        .then((response) => response.json()); 
                    }                
                }
                console.log(updatedMerchant);

                state.merchant[updatedMerchant.id] = updatedMerchant;
                state.viewMerchant = updatedMerchant;
            },

            eraseMerchant: (state, action) => {
                const deletedMerchant = action.payload;          
                delete state.merchant[deletedMerchant.id];
            },

            newMerchant: (state, action) => {
                const newMerchant = action.payload;
                state.merchant[newMerchant.id]=newMerchant;
            },

            setAllSpecification: (state, action) => {
                const allSpecifications = action.payload;
                state.specifications = allSpecifications;
            },

            setAllTypes: (state, action) => {
                const allTypes = action.payload;
                state.types = allTypes;
            }
        }
    }
);

const fetchMerchantByIdTunk = (id) => async (dispatch) => {
    dispatch(setIsBusy());                   
    const fetchedMerchant = await getMerchantById(id);
    dispatch(setMerchantById(fetchedMerchant));      
    dispatch(unsetIsBusy());                             
}

const patchMerchantThunk = (merchant) => async (dispatch) => {
    dispatch(setIsBusy());                   
    const fetchedMerchant = await patchMerchant(merchant); 
    //dispatch(updateMerchant(fetchedMerchant)); 
    dispatch(unsetIsBusy());
}

const deleteMerchantThunk = (merchant) => async (dispatch) => {
    dispatch(setIsBusy());
    await eraseMerchant(merchant);
    await deleteMerchantSchedule(merchant);
    dispatch(deleteMerchant(merchant));
    dispatch(unsetIsBusy());                            
}

const postMerchantThunk = (merchant) => async (dispatch) => {
    dispatch(setIsBusy());
    const fetchedMerchant = await postMerchant(merchant);
    dispatch(newMerchant(fetchedMerchant));
    dispatch(unsetIsBusy());
}

const allMerchantSpecificationThunk = () => async (dispatch) => {
    dispatch(setIsBusy());
    const allSpecifications = await getAllMerchantSpecification();
    dispatch(setAllSpecification(allSpecifications["hydra:member"]));
    dispatch(unsetIsBusy());
}

const allMerchantTypeThunk = () => async (dispatch) => {
    dispatch(setIsBusy());
    const allTypes = await getAllMerchantType();
    dispatch(setAllTypes(allTypes["hydra:member"]));
    dispatch(unsetIsBusy());
}

export const { setMerchantById, updateMerchant, eraseMerchant, newMerchant, setAllSpecification, setAllTypes } = merchantSlice.actions;
export { fetchMerchantByIdTunk, patchMerchantThunk, deleteMerchantThunk, postMerchantThunk, allMerchantSpecificationThunk, allMerchantTypeThunk };
export default merchantSlice.reducer;
