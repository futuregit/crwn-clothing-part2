import {
    auth,
    siginInWithGooglePopup,
    signInWithExistingEmailAndPassword,
    createUserDocumentFromAuth,
    getUserDisplayNameByUserId

} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';
import SignInWithProvider from '../../components/sign-up-email-form/sign-in-provider.component';

import './sign-in-styles.scss'

const SignIn = () => {

    return (
        <div className='container'>
            <div className='innerDiv'>
                <SignInWithProvider />        
            </div>
            <div className='innerDiv'>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignIn