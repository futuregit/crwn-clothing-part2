
import {
    auth,
    siginInWithGooglePopup,
    createUserDocumentFromAuth,
    
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await siginInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Button onClick={logGoogleUser} buttonType='google'>
                Sign in with Google Popup
            </Button>
            <SignUpForm />
        </div>
    )
}

export default SignIn