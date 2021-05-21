import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuth = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

export default ResolveAuth;
