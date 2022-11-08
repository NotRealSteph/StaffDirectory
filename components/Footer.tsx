import {  StyleSheet, TextInput, View, Text, Pressable} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View>
            <Pressable style={({pressed}) => [{
                        opacity: pressed? 0.5:  1,
                    },styles.button]}>
                        <Text> Left </Text>
                    </Pressable>
            </View>
            <View style={{marginLeft:20, marginRight:20}}>
                <TextInput defaultValue='A' style={{textAlign:'center'}}></TextInput>
            </View>
            <View>
            <Pressable style={({pressed}) => [{
                        opacity: pressed? 0.5:  1,
                    },styles.button]}>
                        <Text>Right</Text>
                </Pressable>
            </View>
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