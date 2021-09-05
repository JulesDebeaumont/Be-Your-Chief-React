import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteMerchantThunk } from '../../../store/merchant';
import { deletePersonThunk } from '../../../store/person';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

export function DeleteAccountButton(props)
{

    const { user } = props;
    const [ isDisplayed, setIsDisplayed ] = useState(false);
    const dispatch = useDispatch(); 
    const history = useHistory();

    return(
        <>
            <span className="DeleteAccountButton">
                <span  onClick={() => setIsDisplayed(true)}>Delete account</span>
            </span>
            <span>
             { isDisplayed && 
             <div className="OverlayDelete">
                 <span>Do you really want to delete your account ?</span>
                 <div className="ChooseDeleteAccount">
                     <span onClick={() => {
                         if (user['@type'] === "Merchant" )
                         {
                             dispatch(deleteMerchantThunk(user))
                         }
                         else
                         {
                             dispatch(deletePersonThunk(user));
                         }
                         history.push('/')}
                         }>Yes</span>
                     <span onClick={() => setIsDisplayed(false)}>Cancel</span>
                 </div>
            </div>
            }
            </span>
        </>
    );
}

DeleteAccountButton.propTypes =
{
    user: PropTypes.object,
}

export default DeleteAccountButton;