import {
    Text,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';


const PayBtn = ({
    text = 'Done',
    onPress = () => { },
    disabled = false
}) => {
    return(
        <TouchableOpacity onPress={onPress}
        style={{
            ...styles.container,
            backgroundColor: !disabled? `#2c2b3f`: 'grey',
            
        }}
        disabled={disabled}
        >
            <Text style={styles.textStyle} >{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white'
    }
})

export default PayBtn;