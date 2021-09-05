import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export function ProfilMerchantName(props) {

    const { name, city, postalCode, country, address, display } = props;
    const iconMapMarker = <FontAwesomeIcon icon={ faMapMarkerAlt } onClick={() => {display(); window.location=`#${"MapMerchant"}`;}} />

    return (
        <div className="ProfileMerchantName"><i>{name}</i><br/>
            <div className="ProfileCity">
                {(city !== undefined && address !== undefined) && iconMapMarker}
                {city} {postalCode}<br/>
            <div className="ProfileCountry">{country}</div></div>
        </div>
    )
}

export default ProfilMerchantName;

ProfilMerchantName.propTypes =
{
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
}