import React,  {useState , useEffect} from 'react';
import {Link } from 'react-router-dom';
import '../../css/Navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserIdThunk, fetchUserTypeByIdThunk } from '../../store/user';

export function Navbar()
{
    const[click, setClick]=useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu= () => setClick(false);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.user.id);
    const userType = useSelector(state => state.user.user.type);

    useEffect(() => 
    {
        if (userId === null)
        {
            dispatch(fetchUserIdThunk());
        }
    
        else
        {
            dispatch(fetchUserTypeByIdThunk(userId));
        }
    }, [dispatch, userId]);

    return(
        <>
            <nav className='navbar'>
                    <img className="logo" src='images/logo3.png' alt="logo"/>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {userId !== null && 
                    <>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Recipes
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                My Planning
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Favorites
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to={'/profil/' + userType + '/' + userId} className='nav-links' onClick={closeMobileMenu}>
                                Profil
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Settings
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <a href='http://localhost:8000/logout' className='nav-links' onClick={closeMobileMenu}>
                                Disconnect
                            </a>
                        </li>
                    </>
                    }

                    {userId === null && 
                    <>
                        <li className='nav-item'>
                            <a href='http://localhost:8000/login' className='nav-links' onClick={closeMobileMenu}>
                                Log in
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='http://localhost:8000/register/home' className='nav-links' onClick={closeMobileMenu}>
                                Register
                            </a>
                        </li>
                    </>
                    }           

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;