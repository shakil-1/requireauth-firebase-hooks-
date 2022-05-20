import React from 'react';

const Register = () => {
    const handelRegister = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Please Register!!</h1>

            <form onSubmit={handelRegister}>
                <input type="text" name="name" placeholder='enter your name' required id="" /> <br />
                <input type="email" name="email" placeholder='enter your email' required id="" /><br />
                <input type="password" name="password" placeholder='enter your password' required id="" /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Register;