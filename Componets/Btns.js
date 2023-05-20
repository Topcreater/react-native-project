import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';


const BtnsCard = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.login}>{props.Btns}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        fontSize: 20,
        padding: 10,
        backgroundColor: `#2c2b3f`,
        borderRadius: 20,
        marginVertical: 10,
        width: 300,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      },
})

export default BtnsCard;