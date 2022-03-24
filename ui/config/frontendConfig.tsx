import ThirdPartyEmailPasswordReact from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

import React from 'react';

export const frontendConfig = () => {
    return {
        appInfo,
        recipeList: [
            ThirdPartyEmailPasswordReact.init({
                useShadowDom: false,
                signInAndUpFeature: {
                    providers: [
                        ThirdPartyEmailPasswordReact.Google.init(),
                        ThirdPartyEmailPasswordReact.Github.init(),
                        ThirdPartyEmailPasswordReact.Apple.init(),
                    ],
                },
            }),
            SessionReact.init(),
        ],
    }
}
