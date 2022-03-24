import ThirdPartyEmailPasswordReact from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

import React from 'react';

export const frontendConfig = () => {
    return {
        appInfo,
        recipeList: [
            ThirdPartyEmailPasswordReact.init({
                override: {
                    components: {
                        // @ts-ignore
                        EmailPasswordSignInHeader_Override: ({ DefaultComponent, ...props }: { DefaultComponent: React.ComponentType }) => {
                            return (
                                <React.Fragment>
                                    <h1>I&apos;m a header that you added above original component</h1>
                                    <DefaultComponent {...props} />
                                </React.Fragment>
                            );
                        }

                    },
                },
                signInAndUpFeature: {
                    //disableDefaultImplementation: true,
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
