import React, { useState} from 'react';
import CustomButton from './CustomButton';
import FormInput from './FormInput';
import { auth, createUserProfileDocument } from '../firebase/firebase';

const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {displayName, email, password, confirmPassword } = userCredentials;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({...userCredentials, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log(error)
        }
    }
    
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    value={displayName}
                    onChange={handleChange}
                    required
                     />
                     <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                     />
                     <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                     />
                     <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                     />
                     <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )

    

    
}

export default SignUp
