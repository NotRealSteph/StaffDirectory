import { useNavigation } from '@react-navigation/native';
import {  StyleSheet, View, Text, Pressable} from 'react-native';
import { HomeScreenNavigationProp } from '../src/types';

const ReturnToHomeFooter = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={styles.footer}>
            <View>
            <Pressable style={({pressed}) => [{
                        opacity: pressed? 0.5:  1,
                    },styles.button]}
                    onPress={()=>navigation.navigate('Home')}>
                        <Text> Return To Staff Directory</Text>
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
        width:200,
        height:60,
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        paddingVertical:20
    }
});

export default ReturnToHomeFooter;