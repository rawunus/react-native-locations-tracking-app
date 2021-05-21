import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const { container } = styles;
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign Up For Tracks"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                onsubmitText="Sign Up"
            />
            <NavLink
                text="Already have an account! sign in instead"
                routeName="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100,
    },
});

export default SignupScreen;
