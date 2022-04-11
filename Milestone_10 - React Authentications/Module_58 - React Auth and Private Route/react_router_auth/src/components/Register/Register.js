import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form action="">
                <input type="text" name="" id="" placeholder='Your name' />
                <br />
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;