import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import { Departments } from "../data/staffList";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp} from "../src/types";
import React from "react";

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { name, phone, department, address, city, state, zip, country } =
    route.params;

  const Details = () => {
    return (
      <View style={styles.DetailsContainer}>
        <View style={{flex:1, flexDirection:'row'}}>
        {/*profile picture*/}
          <View style={{
              width: 200,
              height: 200,
              backgroundColor:'red'
            }} >
          <Image
            source={require("../assets/profile.jpg")}
            style={{width:"100%", height:"100%"}} />
          </View>
          {/*view box for minimised view*/}
          <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text>{name}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {Departments[parseInt(department)]}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text>{phone}</Text>
            </View>
            <View>
              <Text>Address: {address}</Text>
            </View>
            <View>
              <Text>City: {city}</Text>
            </View>
            <View>
              <Text>State: {state}</Text>
            </View>
            <View>
              <Text>Zipcode: {zip}</Text>
            </View>
            <View>
              <Text>Country: {country}</Text>
            </View>
          </View>
        </View>
          <View style={{flex:1, backgroundColor:'yellow'}}>
            <Text style={{flex:1}}>About {name}:</Text>
            <Text style={{flex:1}}>This is where the description of {name} would go. Unfortunately the project did not provide one for me
            and I'm not going to make one up myself, so instead here is some filler text.</Text>
            <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
              <Text style={{flex:1}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum."</Text>
          </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{flex:4}}>
        <Details />
      </ScrollView>
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
});

export default DetailScreen;
