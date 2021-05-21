import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam("_id");
    const track = state.find((t) => t._id === _id);
    const initialCoords = track.locations[0].coords;
    return (
        <>
            <Text style={styles.title}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.001,
                    latitudeDelta: 0.001,
                    ...initialCoords,
                }}
                style={styles.map}
            >
                <Polyline
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
        </>
    );
};

TrackDetailScreen.navigationOptions = {
    title: "Track Detail",
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
    title: {
        fontSize: 24,
    },
});

export default TrackDetailScreen;
