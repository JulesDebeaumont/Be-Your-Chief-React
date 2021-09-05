import PropTypes from 'prop-types';
import ProfilPic from "./ProfilPic";

export function EditionImage(props)
{
    const { user , setEdited } = props;

    return(
        <>
            <div className="EditionMerchant">
            <ProfilPic image={user.imageName}/>
                    <form className="FormEditionProfil" onSubmit={(event) => {
                        event.preventDefault();
                        dispatch(patchMerchantThunk(copyMerchant)); 
                        setEdited(false);
                        }}>

                        <button type="submit" className="SaveProfil">Save profil</button>     

                    </form>
            </div>
        </>
    );
}

export default EditionImage;