

export function getRecipes( signal)
{
    return( 
        fetch(getUrl('recipes'), {signal}) 
        .then(response => {
            if (!response.ok)
                throw new Error('There is no reponse ')
            else 
                return response.json();
        
        }));
}
export function getRecipe(id , signalId)
{
    return(
        fetch('https://127.0.0.1:8000/api/recipes/'+id , signalId)
        .then(response => {
            if (!response.ok)
                throw new Error('There is no reponse ')
            else 
                return response.json();
        })
    );
}

export function getUrl(route) {
    
    return 'http://localhost:8000/api/'+route;
}
//next is to do the hook

export function getUser()
{
    return new Promise((resolve) => resolve({login: 7}));
        /*fetch('https://127.0.0.1:8000/login', {credentials : "include"})
        .then(response => {
            console.log(response);
            return response.json();
        }) */
    

}

