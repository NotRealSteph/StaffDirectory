import {  StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../src/types';

const SearchBar = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={{flex:1, flexDirection:'row'}}>
            <View style={{
                marginTop: 20, 
                width:'60%', 
                height:'100%', 
                marginHorizontal:10
                }}>
                <TextInput style={{backgroundColor:'silver'}}></TextInput>
            </View>
            <View style={{flex:1,width:'20%',flexDirection:'row'}}>
                <TouchableOpacity style={styles.button}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate('EnterDetails')}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
        backgroundColor: '#DDDDDD', 
        flex:1, 
        marginTop: 20,
        height: '49%', 
        marginRight:5
    }
});

export default SearchBar;