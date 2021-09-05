import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserIdThunk } from "../store/user";

export function Login()
{
    const dispatch = useDispatch();
    const isFetched= useSelector((state)=> state.user.isFetched);

    if (isFetched === false)
    {
        dispatch(fetchUserIdThunk());
        return null;
    }
    
    else
    {
        return(
            <>
                <h3>Connect to your Account</h3>
                <Button onClick={()=> window.location="http://127.0.0.1:8000/login"}>Connect to your Account</Button>
                <Button onClick={()=> window.location="http://127.0.0.1:8000/register"}>Registration</Button>
            </>
        );
    }
}
export default Login;