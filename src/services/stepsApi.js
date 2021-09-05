import {getUrl} from "./allAPI";


/**
 * Récupère une étépe d'une recette pour une url donnée
 * @param Iri (de type : /api/steps/{id}
 * @returns {Promise<Response>}
 */
export function getStepsByIri(Iri)
{
    return(
        fetch(getUrl(Iri))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}

/**
 * Récupère une étape par son id
 * @param id
 * @returns {Promise<Response>}
 */
export function getStepById(id)
{
    return(
        fetch(getUrl('steps/' + id))
            .then(response => {
                if (!response.ok)
                    throw new Error('There is no reponse ')
                else
                    return response.json();

            }));
}
