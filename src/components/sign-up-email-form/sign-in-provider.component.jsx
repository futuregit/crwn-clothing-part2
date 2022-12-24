import { useState } from 'react';
import {
    auth,
    siginInWithGooglePopup,
    signInWithExistingEmailAndPassword,
    createUserDocumentFromAuth,
    getUserDisplayNameByUserId

} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-provider.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInWithProvider = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const clearField = () => {
        setFormFields(defaultFormFields)
    }

    const logGoogleUser = async () => {
        const { user } = await siginInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logEmailUser = async (event) => {
        event.preventDefault();
        try {
            const response = await signInWithExistingEmailAndPassword(email, password)
            const userName = await getUserDisplayNameByUserId(response.user)
            alert(userName)
            clearField()
        } catch (error) {
            console.log("Email error ", error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h2>I have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={logEmailUser}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='container'>
                    <Button type='submit'>
                        Sign in
                    </Button>
                    <Button onClick={logGoogleUser} type='button' buttonType='google'>
                        Sign in with Google Popup
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default SignInWithProvider;