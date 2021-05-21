//import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackFrom from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLoction,
    } = useContext(LocationContext);

    const callback = useCallback(
        (location) => {
            addLoction(location, recording);
        },
        [recording]
    );

    //const [err] = useLocation(isFocused, addLoction);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Spacer />
            <Map />
            {err ? <Text>please enable location service</Text> : null}
            <TrackFrom />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="plus" size={18} color="black" />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
