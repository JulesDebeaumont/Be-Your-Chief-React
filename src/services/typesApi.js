import {getUrl} from "./allAPI";

export function getTypes () {
    return (
        fetch(getUrl('recipe_types'))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}
