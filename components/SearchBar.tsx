import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/types";
import { useState } from "react";
import { getStaffByName } from "../data/staffServices";

const SearchBar = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchStaff, setSearchStaff] = useState("");

  const handleSearch = () => {
    getStaffByName(searchStaff).then((data) => {
      console.log(data);
      if (data) {
        console.log(data);
        navigation.navigate("Details", {
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
        console.log("not found");
      }
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
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
          value={searchStaff}
          onChangeText={(text) => {
            setSearchStaff(text);
          }}
        ></TextInput>
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
  );
};
const styles = StyleSheet.create({
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

export default SearchBar;
