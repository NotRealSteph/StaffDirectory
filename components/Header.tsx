import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { FC, useState } from "react";
import { getStaffByName } from "../data/staffServices";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp, IheaderProps, IStaff } from "../src/types";

const Header: FC<IheaderProps> = ({ staffData, setFilteredStaffData, departmentsList }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [query, setQuery] = useState("");

  //when someone presses Search
  const handleSearch = () => {
    getStaffByName(query).then((data) => {
      if (data) {
        navigation.push("Details", {
          id: data.id,
          name: data.name,
          phone: data.phone,
          department: data.department,
          address: data.address,
          city: data.city,
          state: data.state,
          zip: data.zip,
          country: data.country,
          description: data.description,
        });
      } else {
        alert(`Staff by the name ${query} wasnt found.`)
        console.log("not found");
      }
    });
  };

  //when someone types into input field
  const handleSearchQuery = (text: string) => {
    const formattedQuery = text.toLowerCase();
    const formattedNumber = parseInt(text.trim());
    if (text) {
      
      const filteredData: IStaff[] = staffData.filter(function (item: IStaff) {
        const {name, department, phone, address, city, state, zip, country } = item;

        // TRYING TO SEARCH BY DEPARTMENT NAME
        // will try and do this later you know
        
        // const result = departmentsList.map((item, index) => {
        //   for (const key in item) {
        //     if (item[key].includes(formattedQuery || index == formattedNumber)) {
        //       return {item}
        //     }
        //   }
        // })

        // const checkresult = ():boolean => {
        //   result.forEach(row => {
        //     for (const key in row) {
        //       if(key.includes(formattedQuery)){
        //         return true;
        //       }
        //     }})
        //     return false
        // }

        if(name.toLowerCase().includes(formattedQuery) || phone.toLowerCase().includes(formattedQuery) || address.toLowerCase().includes(formattedQuery) || city.toLowerCase().includes(formattedQuery) || state.toLowerCase().includes(formattedQuery) || zip.toLowerCase().includes(formattedQuery) || country.toLowerCase().includes(formattedQuery) || department.includes(formattedQuery))
        return true;
        else
        return false;
      });

      setFilteredStaffData(filteredData);
      setQuery(text);
    } else {
      setFilteredStaffData(staffData);
      setQuery(text);
    }
  };

  return (
    <View style={styles.header}>
      {/*Top part*/}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor:"#cb6d4f"
        }}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 170,
            height: "100%",
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            minWidth:160
          }}
        >
          <Text style={{ fontSize: 35, fontWeight:'bold', color: '#941a1d' }}>
            Staff Directory
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Text>Hello, john citizen </Text>
        </View>
        <View style={{ flex: 0.7, marginTop: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#DDDDDD",
              alignItems: "center",
              height: "50%",
              marginRight: 5,
            }}
            accessibilityLabel="Log out of your account"
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*Search bar*/}
      <View style={{ flex: 1, flexDirection: "row", backgroundColor:"#cb6d4f" }}>
        <View
          style={{
            marginTop: 20,
            width: "60%",
            height: "100%",
            marginHorizontal: 10,
          }}
        >
          <TextInput
            style={{ backgroundColor: "silver" }}
            placeholder="Search up a staff member...."
            value={query}
            onChangeText={(text) => handleSearchQuery(text)}
            onKeyPress={(e) => {
              if (e.nativeEvent.key == "Enter") {
                handleSearch();
              }
            }}
          />
        </View>
        <View style={{ flex: 1, width: "20%", flexDirection: "row" }}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={(e) => {
              navigation.navigate("EnterDetails");
            }}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 180,
    width: "100%",
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#DDDDDD",
    flex: 1,
    marginTop: 20,
    height: "49%",
    marginRight: 5,
  },
});

export default Header;
