import React, { useState } from 'react';
import CustomButton from './CustomButton';
import FormInput from './FormInput';
import { auth, signInWithGoogle } from "../firebase/firebase";


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleChange = e => {
        const {value, name} = e.target;
        name === "email" ? setEmail(value) : setPassword(value);
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} handleChange={handleChange} label="Password" required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} type="submit">
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
