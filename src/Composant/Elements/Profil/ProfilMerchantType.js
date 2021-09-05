import PropTypes from 'prop-types';

export function ProfilMerchantType(props) {

    const { type, specification } = props;
    
    return (
        <>
        {type !== undefined || specification !== undefined
            ?
            <div className="ProfileType">
            - Characteristic : {specification !== undefined ? specification.name : null} {type !== undefined ? type.name : null}
            </div>
            :
            null}
        </>
    )
}

export default ProfilMerchantType;

ProfilMerchantType.propTypes =
{
    type: PropTypes.object,
    speciffication: PropTypes.object,
}