import PropTypes from 'prop-types';

export function ProfilPersonName(props) {

    const { firstName, lastName } = props;

    return (
        <div className="ProfilePersonName">
            {firstName} {lastName}
        </div>
    )
}

export default ProfilPersonName;

ProfilPersonName.propTypes =
{
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}