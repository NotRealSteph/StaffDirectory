import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import {  StyleSheet, View, Text, Pressable, Alert} from 'react-native';
import { HomeScreenNavigationProp, IFooterProps } from '../src/types';

const ReturnToHomeFooter:FC<IFooterProps> = ({NoEdit}) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.footer}>
            <View>
            <Pressable style={({pressed}) => [{
                        opacity: pressed? 0.5:  1,
                    },styles.button]}
                    onPress={()=>{
                        if(NoEdit==false){
                            alert("You are returning to the staff directory. Any unsaved information will be lost");
                            navigation.navigate('Home');
                        }
                        if(NoEdit==true){
                            navigation.navigate('Home');
                        }
                        }}>
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
        paddingVertical:20,
        backgroundColor:'#c64c38'
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