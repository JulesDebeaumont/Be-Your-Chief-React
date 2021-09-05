const url="http://localhost:8000/api";

export function getUser()
    {
         return fetch(url+'/people', {
             credentials: "include"
            })

                .then(function(response)
                {
                    if (response.ok)
                        return response.json();
                    else 
                        return {login: null}
                })
                
                .catch(function(error)
                {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                })
    }

export function loginURL()
{
         return "localhost:8000/login"
}

export function redirectToLogout()
{
    return window.location="localhost:8000/logout"
}


export function getUserId()
    {
         return fetch('http://localhost:8000/me', {
             credentials: "include"
            })

                .then(function(response)
                {
                    if (response.ok)
                        return response.json();
                    else 
                        return {login: null}
                })
                
                .catch(function(error)
                {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                })
    }

export function getUserById(id)
{
        return fetch(url+'/accounts/' +id, {
            credentials: "include"
        })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getUserById ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function patchUserById(user)
{
    const header = new Headers({
        "Content-Type" : "application/merge-patch+json"
    })

    return fetch(url+'/accounts/' +user.id,
    {
        credentials: "include",
        method : "PATCH", 
        body : JSON.stringify(user),
        headers: header
     })

        .then(function(response)
        {
            if (response.ok)
                return response.json();
            else 
                throw Error ('Erreur au niveau de patchUserById ' + response.status)
        })
        
        .catch(function(error)
        {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
}