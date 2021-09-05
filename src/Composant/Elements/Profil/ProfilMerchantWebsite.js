import PropTypes from 'prop-types';

export function ProfilMerchantWebsite(props) {

    const { webSiteLink } = props;

    return (
        <>
        {webSiteLink !== undefined
            ?
            <div className="ProfileWebsite">
            - Website : <u><a href={webSiteLink}>{webSiteLink}</a></u>
            </div>
            :
            null}
        </>
    )
}

export default ProfilMerchantWebsite;

ProfilMerchantWebsite.propTypes =
{
    webSiteLink: PropTypes.string,
}