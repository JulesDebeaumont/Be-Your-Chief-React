import PropTypes from 'prop-types';

export function RecipeButton(props)
{
    const { recipies } = props;

    if (recipies === undefined || recipies === 0)
    {
        return(
            <span className="ButtonRecipe">
                    <span>Recipies : 0</span>
            </span>
        );
    }

    else
    {
        return(
                <span className="ButtonRecipe">
                    <a href="http://localhost:3000/"> Recipies : {recipies} </a>
                </span>
        );
    }
}

RecipeButton.propTypes =
{
    recipies: PropTypes.number,
}

export default RecipeButton;