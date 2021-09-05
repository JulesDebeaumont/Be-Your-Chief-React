import PropTypes from 'prop-types';

export function ProfilAddress(props)
{

    const { address } = props;

    return(
        <>
            {address !== undefined 
            ? 
            <div className="ProfileAddress">
                - Location : {address}
            </div>
            :
            null}
        </>
    )
}

ProfilAddress.propTypes =
{
    address: PropTypes.string,
}