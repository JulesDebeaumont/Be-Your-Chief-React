const url="http://localhost:8000/api"

export function getAccountById(id)
{
        return fetch(url+'/accounts/' + id , 
        {
            credentials: "include",
        })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getAccountById ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function uploadFile(file)
{
    const formData = new FormData();

    formData.append('file', file);

        return fetch(url+'/media_objects' , 
        {
            credentials: "include",
            method: "POST",
            body: formData,
        })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de uploadFile ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}
