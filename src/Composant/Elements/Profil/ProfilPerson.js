import PropTypes from 'prop-types';
import { ProfilPersonName } from './ProfilPersonName.js';
import { ProfilDescription } from './ProfilDescription.js';
import RecipeButton from './RecipeButton.js';

export function ProfilPerson(props) {

    const { user, recipies } = props;

    return (
        <div className="ProfilPerson">
            <div className="ProfilePersonContent">
                <ProfilPersonName firstName={user.firstName} lastName={user.lastName} />
                <ProfilDescription description={user.description} />
                <RecipeButton recipies={recipies}/>
            </div>
        </div>
    );
}

ProfilPerson.propTypes =
{
    user: PropTypes.object,
    recipies: PropTypes.number,
}

export default ProfilPerson;
