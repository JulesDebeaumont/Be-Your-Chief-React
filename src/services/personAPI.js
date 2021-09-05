const url="http://localhost:8000/api"


export function getPersonById(id)
{
        return fetch(url+'/people/' + id)

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getPersonById ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}



export function patchPerson(person)
{
    
    const header = new Headers({
        "Content-Type" : "application/merge-patch+json"
    })

    return fetch(url+'/people/' + person.id ,
    {
        credentials: "include",
        method : "PATCH", 
        person : JSON.stringify(person),
        headers: header
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de patchPerson ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function deletePerson(person)
{

    return fetch(url+'/people/' + person.id ,
    {
        credentials: "include",
        method : "DELETE"
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de deletePerson ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}


export function postPerson(person)
{
    person = JSON.stringify(person);

    const header = new Headers({
        "Content-Type" : "application/json"
    })

    return fetch(url+'/people' ,
    {
        credentials: "include",
        method : "POST", 
        body : person,
        headers: header
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de postPerson ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}