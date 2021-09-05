import ProfilMerchant from "./ProfilMerchant";
import ProfilPerson from "./ProfilPerson";
import ProfilPic from "./ProfilPic";
import ModifierButtonProfile from './ModifierButtonProfil';
import EditionMerchant from "./EditionMerchant";
import EditionPerson from "./EditionPerson";
import { useProfil } from "../../hook/useProfil";

export function Profil()
{
    const { merchant, person , edited, setEdited, typeUser, userId, nbRecipe } = useProfil();

    if (merchant === null && person === null)
    {
        return null;
    }

    return (

        <>
            {edited === true 
            ?
                <>
                {typeUser === "merchant" 
                ?
                    <EditionMerchant merchant = {merchant} setEdited={setEdited}/>
                :
                    <EditionPerson person = {person} setEdited={setEdited}/>}
                </>
            :
                <>
                {typeUser === "merchant" 
                ? 
                    <div className="Profil">
                        <ProfilPic imageName={merchant.imageName} image={merchant.image} />
                        <ProfilMerchant user={merchant} recipies={nbRecipe}/>
                        <div className="ButtonsProfil">
                            {userId === merchant.id && <ModifierButtonProfile action={setEdited} text={"Modify profil"} />}
                            {userId === merchant.id && <span className="ProfileModifierButton">
                                <a href="http://localhost:8000/reset-password">Change password</a>
                                </span>}                            
                        </div>
                    </div>
                :
                <>
                    <div className="Profil">
                        <ProfilPic image={person.imageName}/>
                        <ProfilPerson user={person} recipies={nbRecipe}/>
                        <div className="ButtonsProfil">
                            {userId === person.id && <ModifierButtonProfile action={setEdited} text={"Modify profil"} />}
                            {userId === person.id && <span className="ProfileModifierButton">
                                <a href="http://localhost:8000/reset-password">Change password</a>
                                </span>}
                        </div>
                    </div>
                </>}
            </>}
        </>
    )
}

export default Profil;