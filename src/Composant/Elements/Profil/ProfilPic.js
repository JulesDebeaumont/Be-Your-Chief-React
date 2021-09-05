import PropTypes from 'prop-types';
import { urlImageAccount } from "../../../services/merchantAPI"

export function ProfilPic(props)
{

    const { imageName, image } = props;
    console.log(imageName, image);

    return(
        <div className="ProfilPic">
            <img 
            className="ImageProfile" 
            src={image !== undefined && image !== null
                ? 
                (urlImageAccount + image) 
                : 
                imageName !== undefined && imageName !== null
                    ?
                    (urlImageAccount + imageName)
                    :
                    ('/images/default.png')
                } 
            alt="UserImage"
            width={200} 
            height={200}/>
        </div>
    );
}

ProfilPic.propTypes =
{
    image: PropTypes.string,
    imagePath: PropTypes.object,
}

export default ProfilPic;