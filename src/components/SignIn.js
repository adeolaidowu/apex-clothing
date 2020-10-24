import React, { useState } from 'react';
import FormInput from './FormInput';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    }

    const handleChange = e => {
        const {value, name} = e.target;
        name === "Email" ? setEmail(value) : setPassword(value);
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} handleChange={handleChange} label="Password" required />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}

export default SignIn
