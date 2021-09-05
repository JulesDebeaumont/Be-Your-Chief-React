import {getUrl} from "./allAPI";


export function getIngredients () {
    return (
        fetch(getUrl('ingredients'))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}