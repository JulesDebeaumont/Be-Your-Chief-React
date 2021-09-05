import Navbar from "../Elements/Navbar";
import Recipes from "../Elements/Recipes";
import useRecipes from "../hook/useRecipes";
import React from "react";


export function RecipesPage()
{
    const{recipes , setRecipes }=useRecipes();
    if (recipes === null )
    {
        return(
        <h3>Loading</h3> 
    );
    }
    return(
        <div >
        <div className="allRecipes">{recipes.map((recipe, i)=> 
        <div key={i} className="data">
            <img  src={"https://127.0.0.1:8000/images/recipes/"+recipe.imageName} alt="image" className="image"/>
            <h3 className="recipe" key={i} >{recipe.name}</h3>
            <p className="description" key={i}>{recipe.description}</p>
            <p className="description" key={i}>cooking Time:{recipe.cookTime}</p>
        </div>
        )}</div>
    </div>
    );
}
export default RecipesPage;