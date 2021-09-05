import PropTypes from 'prop-types';

export function ProfilDescription(props)
{

    const { description } = props;

    return(
        <>
        {description !== undefined
            ?
            <div className="ProfileDescription">
                <i>{description}</i>
            </div>
            :
            <div className="ProfileDescription">
                <i>No description available</i>
            </div>}
        </>
    )
}

ProfilDescription.propTypes =
{
    description: PropTypes.string,
}