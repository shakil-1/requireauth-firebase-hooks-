import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'

const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/login">Login</Link>

                {
                    user?.uid ?
                        <button onClick={() => signOut (auth)}>Sign Out</button> :
                        <Link to="/register">Register</Link>
                }
            </nav>
        </div>
    );
};

export default Header;