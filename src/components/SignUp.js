import React from 'react';
import CustomButton from './CustomButton';
import FormInput from './FormInput';
import { auth, createUserProfileDocument } from '../firebase/firebase';

class SignUp extends React.Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState(() => ({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }))
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    value={displayName}
                    onChange={this.handleChange}
                    required
                     />
                     <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                     />
                     <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={this.handleChange}
                    required
                     />
                     <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required
                     />
                     <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

    

    
}

export default SignUp