import {getUrl} from "./allAPI";

export function getRegimens () {
    return (
        fetch(getUrl('recipe_regimens'))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    console.log(response);
                    return response.json();
            }));
}
