import { useDispatch, useSelector } from 'react-redux'
import { fetchMerchantByIdTunk } from '../../store/merchant'
import { fetchPersonByIdTunk } from '../../store/person'
import { fetchAccountRecipiesThunk } from '../../store/account'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserIdThunk } from '../../store/user';

export function useProfil()
{
    const [edited, setEdited] = useState(false);
    const userId = useSelector(state => state.user.user.id);
    const merchant = useSelector((state) => state.merchant.viewMerchant);
    const person = useSelector((state) => state.person.viewPerson);
    const nbRecipe = useSelector((state) => state.account.recipies);
    const dispatch = useDispatch();
    const { id, type } = useParams();

    const typeUser = type.toLowerCase();

    useEffect(() => 
    {
        if (typeUser === "merchant")
        {
                dispatch(fetchMerchantByIdTunk(id))
        }
        else
        {
                dispatch(fetchPersonByIdTunk(id))
        }

        dispatch(fetchAccountRecipiesThunk(id));
        dispatch(fetchUserIdThunk());
    }, [id, dispatch, typeUser, edited]);

    return { edited, merchant, person, setEdited, typeUser, userId, nbRecipe }
}

