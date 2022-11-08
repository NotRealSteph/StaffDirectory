import {  StyleSheet, View} from 'react-native';
import SearchBar from './SearchBar';
import HeaderTop from './HeaderTop';

const Header = () => {
    return (
        <View style={styles.header}>
                <HeaderTop/>
                <SearchBar/>
        </View>
        )
};

const styles = StyleSheet.create({
    header: {
            height:180,
            width: '100%',
            flexDirection:'column'
    },
});

export default Header;