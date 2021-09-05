const url="http://localhost:8000/api"

export const urlImageAccount="http://127.0.0.1:8000/images/accounts/"

export function getMerchantById(id)
{
        return fetch(url+'/merchants/' + id , 
        {
            credentials: "include",
        })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getMerchantById ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function patchMerchant(merchant)
{
    const header = new Headers({
        "Content-Type" : "application/merge-patch+json"
    })

    if (merchant.merchantSpecification['@id'] === 'none')
    {
        merchant.merchantSpecification = {};
    }

    else 
    {
        merchant.merchantSpecification = merchant.merchantSpecification['@id'];
    }

    if (merchant.merchantType['@id'] === 'none')
    {
        merchant.merchantType = {};
    }

    else 
    {
        merchant.merchantType = merchant.merchantType['@id'];
    }

    return fetch(url+'/merchants/' + merchant.id ,
    {
        credentials: "include",
        method : "PATCH", 
        body : JSON.stringify(merchant),
        headers: header
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de patchMerchant ' + response.status)
            }) 
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function deleteMerchant(merchant)
{

    return fetch(url+'/merchants/' + merchant.id ,
    {
        credentials: "include",
        method : "DELETE"
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de deleteMerchant ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function deleteMerchantSchedule(merchant)
{

    return fetch(url+'/merchants/' + merchant.id ,
    {
        credentials: "include",
        method : "DELETE"
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de deleteMerchant ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function postMerchant(merchant)
{
    merchant = JSON.stringify(merchant);

    const header = new Headers({
        "Content-Type" : "application/json"
    })

    return fetch(url+'/merchants' ,
    {
        credentials: "include",
        method : "POST", 
        body : merchant,
        headers: header
     })

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de postMerchant ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function getAllMerchantSpecification()
{
        return fetch(url+'/merchant_specifications' , { credentials: "include"})

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getAllMerchantSpecification ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}

export function getAllMerchantType()
{
        return fetch(url+'/merchant_types' , { credentials: "include"} )

            .then(function(response)
            {
                if (response.ok)
                    return response.json();
                else 
                    throw Error ('Erreur au niveau de getAllMerchantType ' + response.status)
            })
            
            .catch(function(error)
            {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            })
}
