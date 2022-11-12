import {  StyleSheet, TextInput, View, Text, Pressable} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height:100,
        flexDirection: 'row',
        justifyContent:'center',
        paddingVertical:20
  },
    button: {
        width:100,
        height:30,
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        paddingVertical:5
    }
});

export default Footer;