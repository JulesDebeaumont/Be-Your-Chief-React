import Schedule from './Schedules.js';
import PropTypes from 'prop-types';
import { ProfilMerchantName } from './ProfilMerchantName.js';
import { ProfilDescription } from './ProfilDescription.js';
import { ProfilAddress } from './ProfilAddress.js';
import { ProfilMerchantWebsite } from './ProfilMerchantWebsite.js';
import { ProfilMerchantType } from './ProfilMerchantType.js';
import { Map } from './Map.js';
import { useState } from 'react';
import RecipeButton from './RecipeButton.js';

export function ProfilMerchant(props) {

    const { user, recipies } = props;
    const [display, setDisplay] = useState(false);

    function toggleDisplay()
    {
        if (display === false)
        {
            setDisplay(true)
        }
        else
        {
            setDisplay(false)
        }

        console.log(display);
    }

    return (
            <div className="ProfilMerchant">
                <div className="ProfileMerchantContent">
                    <ProfilMerchantName 
                    name={user.name} 
                    city={user.city} 
                    postalCode={user.postalCode} 
                    country={user.country} 
                    address={user.address}
                    display={() => toggleDisplay()}
                    />
                    <ProfilDescription description={user.description} />
                    <ProfilMerchantType type={user.merchantType} specification={user.merchantSpecification} />
                    <ProfilAddress address={user.address} />
                    <ProfilMerchantWebsite webSiteLink={user.webSiteLink} />
                    <Schedule schedules={user.schedules}/>
                    <RecipeButton recipies={recipies}/>

                    {display === true &&
                    <Map city={user.city} address={user.address} name={user.name}/>}
                </div>    
            </div>
    );
}

export default ProfilMerchant;

ProfilMerchant.propTypes =
{
    user: PropTypes.object,
    recipies: PropTypes.number,
}
