import {getUrl} from "./allAPI";

export function getMenuTypes () {
    return (
        fetch(getUrl('menu_types'))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}