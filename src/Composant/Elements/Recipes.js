import { useEffect, useState } from "react";
import './../../css/Recipes.css'


export function Recipe()
{
    const [recipes, setRecipes]=useState(null);

    
    useEffect(()=>
    {
        fetch("https://127.0.0.1:8000/api/recipes")
    .then(response=> {
        if(!response.ok)
        {
            throw new Error('there is no response')
        }
        else 
            return response.json();
    })
    .then(data=>{console.log(data); setRecipes(data['hydra:member'])})
    .catch ((error)=> console.log('error from recipes fetch', error)) 
    
    },[]);
    if (recipes === null)
    return("Loading")

    return(
        <div >
            <div className="allRecipes">
                {recipes.map((recipe, i)=> 
                    <div key={i} className="data">
                        <img  src={"http://127.0.0.1:8000/images/recipes/"+recipe.imageName} alt="image" className="image"/>
                        <h3 className="recipe" key={i} >{recipe.name}</h3>
                        <p className="description" key={i}>{recipe.description}</p>
                    </div>

            )}</div>
        </div>
    );
}
export default Recipe;