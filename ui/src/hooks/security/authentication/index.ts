import { useState } from 'react';
import Session from 'supertokens-auth-react/recipe/session';

export const useLoginStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const waitForSession = async () => {
        setLoggedIn(await Session.doesSessionExist());
    }
    waitForSession();
    return loggedIn;
}
