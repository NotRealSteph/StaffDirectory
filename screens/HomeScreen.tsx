import  Header  from '../components/Header';
import Footer from '../components/Footer';
import RenderListItem from '../components/RenderListItem';
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import { getStaffList } from '../data/staffServices';
import { IStaff} from '../src/types';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const [staffData, setStaffData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(React.useCallback(() => {
    getStaffList()
      .then((data) => {setStaffData(data); console.log("its done");})
      .catch((error) => { console.error(error) })
      .finally(() => setIsLoading(false));
  }, []))

  const renderItem: ListRenderItem<IStaff> = ({item}) => <RenderListItem data={item} />;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
            {isLoading? <ActivityIndicator /> : (
                <FlatList 
                data={staffData}
                keyExtractor={(item:IStaff) => item.id} 
                renderItem={renderItem}/>
                )}
            </View>
            <Footer />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 4,
    },
    ListItem: {
      flex: 1,
      margin: 5,
      padding: 10,
      backgroundColor: "red",
    },
    ItemBox: {
      flex: 1,
      alignItems: "center",
      flexWrap: "wrap",
      flexDirection: "row",
    },
  });

export default HomeScreen;