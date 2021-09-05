import {getUrl} from "./allAPI";

export function getOrigins (signal) {
    return (
        fetch(getUrl('recipe_origins'), {signal})
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}
