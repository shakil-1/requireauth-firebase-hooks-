import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.form?.pathname || "/";
    const handelgooglesignin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    const handelLogin = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Please Login!</h1>
            <button onClick={handelgooglesignin}>Google Sign In</button>

            <form onSubmit={handelLogin}>
                <input type="email" name="email" placeholder='enter your email' required id="" /><br />
                <input type="password" name="password" placeholder='enter your password' required id="" /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;