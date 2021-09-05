import {createSlice} from "@reduxjs/toolkit";
import {deleteRecipe, getRecipes, patchRecipe, postRecipe} from "../services/recipesAPI";

let count = 0;

const recipesSlice = createSlice(
    {
        name: "recipes",

        initialState: {
            recipes: {},
        },

        reducers: {
            /**
             * Ajouter des recettes dans le store.
             * @param state
             * @param action
             */
            setRecipes: (state, action) => {
                const newRecipes = action.payload;
                newRecipes.forEach((recipe) => {
                    state.recipes[recipe.id] = recipe;
                })

                newRecipes.forEach((recipe) => {
                    if(recipe.id > count) {
                        count = recipe.id;
                    }
                })
            },

            /**
             * Ajouter une recette dans le store.
             * @param state
             * @param action
             */
            newRecipe: (state, action) => {
                state.recipes[++count] = action.payload;
            },

            /**
             * Editer une recette.
             * @param state
             * @param action
             */
            updateRecipe: (state, action) => {
                const newRecipe = action.payload;
                state.recipes[newRecipe.id] = newRecipe;
            },

            /**
             * Supprimer une recette du store.
             * @param state
             * @param action
             */
            eraseRecipe: (state, action) => {
                const id = action.payload;
                delete state.recipes[id];
            },


            /**
             * Ajouter une étape à la recette.
             * @param state
             * @param action type {idRecipe:id de la recette, step: {objet step}}
             */
            addStep: (state, action) => {
                const {recipeId, step} = action.payload;
                state.recipes[recipeId].steps.push(step);
            },

            /**
             * supprimer une étape de la recette
             * @param state
             * @param action
             */
            suppStep: (state, action) => {
                const {recipeId, step} = action.payload;
                delete state.recipes[recipeId].steps[step.id];
            },

            /**
             * Modifier une étape à la recette.
             * @param state
             * @param action type {idRecipe:id de la recette, step: {objet step}}
             */
            updateStep: (state, action) => {
                const {recipeId, step} = action.payload;
                state.recipes[recipeId].steps[step.id] = step;
            },

            /**
             * Ajouter une quantité à la recette
             * @param state
             * @param action type {idrecipe:id de la recette, quantity: {}}
             */
            addQuantity: (state, action) => {
                const {recipeId, quantity} = action.payload;
                state.recipes[recipeId].quantities.push(quantity);
            },

            /**
             * supprimer une quantité de la recette
             * @param state
             * @param action
             */
            suppQuantity: (state, action) => {
                const {recipeId, quantity} = action.payload;
                delete state.recipes[recipeId].quantities[quantity.id];
            },

            /**
             * Modifier une quantité à la recette.
             * @param state
             * @param action
             */
            updateQuantity: (state, action) => {
                const {recipeId, quantity} = action.payload;
                state.recipes[recipeId].quantities[quantity.id] = quantity;
            },

            /**
             * Ajouter un type de menu à la recette
             * @param state
             * @param action IRI
             */
            addMenuType: (state, action) => {
                const {recipeId, menuType} = action.payload;
                state.recipes[recipeId].menuType.push(menuType);
            },

            /**
             * Supprimer un type de menu de la recette
             * @param state
             * @param action IRI
             */
            suppMenuType: (state, action) => {
                const {recipeId, menuTypeId} = action.payload;
                delete state.recipes[recipeId].menuType[menuTypeId];
            },

            /**
             * Update un type de menu pour la recette
             * @param state
             * @param action IRI
             */
            updateMenuType: (state, action) => {
                const {recipeId, menuType} = action.payload;
                state.recipes[recipeId].menuType[menuType.id] = menuType;
            }
        }
    }
)



export const fetchRecipes = () => (dispatch, getState) => {
    getRecipes().then(data => dispatch(setRecipes(data['hydra:member'])))
}

export const fetchCreateRecipes = (recipe) => (dispatch, getState) => {
    postRecipe(recipe).then(data => dispatch(newRecipe(data['hydra:member'])));
}

export const fetchUpdateRecipes = (recipe) => (dispatch, getState) => {
    patchRecipe(recipe).then(data => dispatch(updateRecipe(data)));
}

export const fetchDeleteRecipe = (id) => (dispatch, getState) => {
    deleteRecipe(id).then(dispatch(eraseRecipe(id)));
}

export const {setRecipes, newRecipe, updateRecipe, eraseRecipe, addMenuType, addQuantity, addStep,
updateMenuType, updateQuantity, updateStep, suppMenuType, suppQuantity, suppStep} = recipesSlice.actions;
export default recipesSlice.reducer;