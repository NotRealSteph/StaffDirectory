import Header from "../components/Header";
import RenderListItem from "../components/RenderListItem";
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import { getDepartmentsList, getStaffList } from "../data/staffServices";
import { IStaff, StaffArray } from "../src/types";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
const HomeScreen = () => {
  const [staffData, setStaffData] = useState<StaffArray>([]);
  const [filteredStaffData, setFilteredStaffData] = useState<StaffArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [departmentList, setDepartmentList] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getStaffList()
        .then((data) => {
          setIsLoading(true);
          setStaffData(data);
          setFilteredStaffData(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      getDepartmentsList()
        .then((data) => {
          setDepartmentList(data);
        })
        .catch((error) => console.error(error));
    }, [])
  );

  const renderItem: ListRenderItem<IStaff> = ({ item }) => (
    <RenderListItem data={item} />
  );

  return (
    <View style={styles.container}>
      <Header
          staffData={staffData}
          setFilteredStaffData={setFilteredStaffData}
          departmentsList={departmentList}
        />
      <View style={styles.body}>
        
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
          style={{marginTop:10}}
            data={filteredStaffData}
            keyExtractor={(item: IStaff) => item.id}
            renderItem={renderItem}
            initialNumToRender={10}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 4,
    backgroundColor:"#c64c38"
  }
});

export default HomeScreen;
