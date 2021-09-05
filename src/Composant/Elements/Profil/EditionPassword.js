import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchUserByIdThunk, patchUserByIdThunk } from "../../../store/user";
import { useDispatch, useSelector } from 'react-redux'

export function EditionPassword(props)
{
    const { setEditedPassword, userId } = props;

    const user = useSelector((state) => state.userById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserByIdThunk(userId));
    }, [dispatch, userId])

    return(
        <div className="EditionPassword">
                <form className="FormEditionPassword" onSubmit={(event) => {
                    event.preventDefault();
                    //if input.value du premier champ !== password actuel => error
                    //Else
                    //dispatch(patchUserByIdThunk(user)); 
                    setEditedPassword(false);
                    }}>

                    <div className="EditionPasswordFirst">
                        <label>Enter your current password :</label>
                        <input type="text" />
                    

                        <label>Enter a new password :</label>
                        <input type="text" />

                        <label>Repeat the new password :</label>
                        <input type="text" />

                    </div>
                    <button type="submit" className="SaveProfil">Change Password</button>   
                    <span onClick={() => setEditedPassword(false)} type="button" className="ProfileModifierButton">Cancel</span>  

                </form>
            </div>
    );
}

EditionPassword.propTypes =
{
    setEditedPassword: PropTypes.func,
    user: PropTypes.number
}