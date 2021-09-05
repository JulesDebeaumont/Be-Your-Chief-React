import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export function Gate(props)
{
    const {message, children} = props;
    const user = useSelector(state => state.user)

    return(
            <>
                {user.id === null? 
                <div className="message"> {message} </div>
                : 
                <>
                    {children}
                </>
                }
            </>
    )
}

Gate.propTypes = 
{
    message: PropTypes.object,
    children: PropTypes.array,
}

export default Gate;