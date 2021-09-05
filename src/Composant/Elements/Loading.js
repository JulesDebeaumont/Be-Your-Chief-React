import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export function Loading()
{
    return(
        <>
        <FontAwesomeIcon icon={faSpinner} className='load'/>
        </>
    )
}

export default Loading;
