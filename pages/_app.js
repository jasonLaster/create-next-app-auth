import React from "react";
import { AuthConfig } from "../utils";
import { Auth0 } from "../utils/providers/Auth0";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <AuthConfig
                authProvider={Auth0}
                navigate={url => router.push(url)}
                params={{
                    domain: "useauth.auth0.com",
                    clientID: "GjWNFNOHq1ino7lQNJBwEywa1aYtbIzh"
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
2;
