import React, { useEffect } from "react";
import { useAuth } from "../utils";

const AUTHCallback = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        console.log(`handleAuth`);
        handleAuthentication();
    }, []);

    return (
        <h1>
            This is the auth callback page, you should be redirected
            immediately.
        </h1>
    );
};

export default AUTHCallback;
