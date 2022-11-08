import  Header  from '../components/Header';
import Footer from '../components/Footer';
import RenderListItem from '../components/RenderListItem';
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
} from "react-native";
import {  StaffData } from "../data/staffList";
import { IStaff} from '../src/types';
import React from 'react';

const HomeScreen = () => {

  const renderItem: ListRenderItem<IStaff> = ({item}) => <RenderListItem data={item} />;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
              <FlatList 
              data={StaffData}
              keyExtractor={(item:IStaff) => item.id} 
              renderItem={renderItem}/>
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