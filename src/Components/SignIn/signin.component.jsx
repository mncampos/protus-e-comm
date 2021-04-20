import React from 'react';
import './signin.styles.scss';
import FormInput from '../Form-Input/form-input.component.jsx';
import CustomButton from '../CustomButton/custombutton.component.jsx';
import {signInWithGoogle} from '../../Firebase/firebase.utils.js';

class SignIn extends React.Component{
constructor(props){
    super(props);

    this.state = {

        email: '',
        password: ''

    
    }
}


    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <CustomButton type="submit" value="Submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {' '}Sign In with Google{' '}</CustomButton>
                </form>
            </div>
        )

    }

}

export default SignIn;