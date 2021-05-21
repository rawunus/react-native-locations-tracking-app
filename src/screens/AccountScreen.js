import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Spacer>
                <Spacer />
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={18} color="black" />,
};
const styles = StyleSheet.create({});

export default AccountScreen;
