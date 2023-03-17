import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React from 'react';

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
             <ActivityIndicator size="large" color="#666" />
        </View>
    );
}


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});