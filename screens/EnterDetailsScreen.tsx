import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import { Departments } from "../data/staffList";
import {saveNewStaff} from "../data/staffServices";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  HomeScreenNavigationProp, EnterDetailsScreenRouteProp
} from "../src/types";
import React, { useState } from "react";

const EnterDetailsScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const saveStaff = function() {
      saveNewStaff(name, department, phone, address, city, state, zipcode, country, description)
      .then(() => {
        console.log('staff added');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.DetailsContainer}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/*profile picture*/}
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: "red",
            }}
          >
            <Image
              source={require("../assets/profile.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          {/*view box for minimised view*/}
          <View style={{ flex: 1, paddingTop: 20 }}>
            <View style={{}}>
              <Text>
                Name:{" "}
                <TextInput
                  key="name"
                  placeholder="Type your name in here"
                  onChangeText={(newText) => setName(newText)}
                  defaultValue={name}
                  style={{ backgroundColor: "red" , width: 300}}
                />
              </Text>
            </View>
            <View style={{}}>
              <Text style={{}}>
                Department:{" "}
                <TextInput 
                  key="department"
                  placeholder="Type your Department in here"
                  onChangeText={(newText) => setDepartment(newText)}
                  defaultValue={department}
                  style={{ backgroundColor: "red", width: 300 }} />
              </Text>
            </View>
            <View style={{}}>
              <Text>
                Phone:{" "}
                <TextInput 
                  key="phone"
                  placeholder="Type your phone number in here"
                  onChangeText={(newText) => setPhone(newText)}
                  defaultValue={phone}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
            <View>
              <Text>
                Address:{" "}
                <TextInput 
                  key="address"
                  placeholder="Type your address in here"
                  onChangeText={(newText) => setAddress(newText)}
                  defaultValue={address}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
            <View>
              <Text>
                City: {"  "}
                <TextInput 
                  key="city"
                  placeholder="Type your city in here"
                  onChangeText={(newText) => setCity(newText)}
                  defaultValue={city}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
            <View>
              <Text>
                State:{" "}
                <TextInput 
                  key="state"
                  placeholder="Type your state in here"
                  onChangeText={(newText) => setState(newText)}
                  defaultValue={state}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
            <View>
              <Text>
                Zipcode:{" "}
                <TextInput 
                  key="zip"
                  placeholder="Type your zipcode in here"
                  onChangeText={(newText) => setZipcode(newText)}
                  defaultValue={zipcode}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
            <View>
              <Text>
                Country:{" "}
                <TextInput 
                  key="country"
                  placeholder="Type your country in here"
                  onChangeText={(newText) => setCountry(newText)}
                  defaultValue={country}
                  style={{ backgroundColor: "red", width: 300 }}/>
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          <Text style={{ flex: 1 }}>
            About :
            <TextInput 
              key = "desc"
              placeholder="Type your profile description in here"
              onChangeText={(newText) => setDescription(newText)}
              defaultValue={description}
              style={{ backgroundColor: "red", width: 500}}/>
          </Text>
        </View>
        <Pressable style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: pressed ? "white" : "beige",
            },
            styles.Button,
          ]}
          onPress={(e) => {saveStaff();navigation.navigate("Home");}}>
            <Text>Save</Text>
          </Pressable>
      </View>
      <ReturnToHomeFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DetailsContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  Button: {
        width:200,
        height:60,
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        paddingVertical:20
  }
});

export default EnterDetailsScreen;
