import PropTypes from 'prop-types';
import { useState } from 'react';
import { patchPersonThunk } from '../../../store/person';
import ProfilPic from "./ProfilPic";
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountButton from './DeleteAccountButton';

export function EditionPerson(props)
{

    const { person, setEdited } = props;
    const [ copyPerson, setCopyPerson] = useState({...person});
    const dispatch = useDispatch();
    const isBusy = useSelector((state) => state.app.isBusy);

    if (isBusy === true)
    {
        return null;
    }

    return(
            <div className="EditionPerson">
                <ProfilPic image={person.imageName}/>
                <span className="ProfileRecipeButton">
                    <span>{'Upload image'}</span>
                    <input type="file" />
                </span>

                <form className="EditionPersonInfo" onSubmit={(event) => {
                    event.preventDefault(); 
                    dispatch(patchPersonThunk(copyPerson)); 
                    setEdited(false);
                    }}>

                    <label>First Name: </label>
                    <input type="text" value={copyPerson.firstName} placeholder="First Name" onChange={(event)=> {
                        const copyFirstNamePerson = {...copyPerson}
                        copyFirstNamePerson.firstName = event.target.value;
                        setCopyPerson(copyFirstNamePerson);
                    }}/>

                    <label>Last Name :</label>
                    <input type="text" value={copyPerson.lastName} placeholder="Last Name" onChange={(event)=> {
                        const copyLastNamePerson = {...copyPerson}
                        copyLastNamePerson.lastName = event.target.value;
                        setCopyPerson(copyLastNamePerson);
                    }}/>

                    <button type="submit" className="SaveProfil">Save profil</button>     
                </form>

             <DeleteAccountButton user={copyPerson}/>

             <span onClick={() => setEdited(false)} type="button" className="ProfileModifierButton">Back to the Profil</span>  
            </div>
    );
}

EditionPerson.propTypes =
{
    person: PropTypes.object,
    setEdited: PropTypes.func,
}

export default EditionPerson;