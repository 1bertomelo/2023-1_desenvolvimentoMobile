import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import colors from '../../styles/colors';




export default function LinkButton(props) {
    return (
        <>
            <TouchableOpacity style={styles.MyButtonStyle}
                activeOpacity={0.7}
                {...props}>
                <Text style={styles.MyTextButtonStyle}> {props.title} </Text>
            </TouchableOpacity>
        </>

    );
}


const styles = StyleSheet.create({
    MyButtonStyle: {
        backgroundColor: colors.white,
        borderRadius: 8,
        height: 50,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    MyTextButtonStyle: {
        color: colors.redButton,
        fontSize: 14,
        fontWeight: 'bold'
    },
});