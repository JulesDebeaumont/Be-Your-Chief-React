import PropTypes from 'prop-types';

export function ModifierButtonProfil(props)
{
    const { action, text } = props;

    return(
        <span className="ProfileModifierButton">
            <a onClick={() =>action(true)}>{text}</a>
        </span>
    );
}

ModifierButtonProfil.propTypes =
{
    action: PropTypes.func,
    text: PropTypes.string,
}

export default ModifierButtonProfil;