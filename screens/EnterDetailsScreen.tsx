import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import { Departments } from "../data/staffList";
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp, EnterDetailsScreenRouteProp} from "../src/types";
import React from "react";

const EnterDetailsScreen = () => {
  const route = useRoute<EnterDetailsScreenRouteProp>();
//   const { name, phone, department, address, city, state, zip, country } =
//     route.params;

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
          <View style={{ flex: 1, paddingTop: 20 }}>
            <View
              style={{}}
            >
              <Text>Name: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View
              style={{
              }}
            >
              <Text style={{}}>
              Department: <TextInput style={{backgroundColor:'red'}}></TextInput>
              </Text>
            </View>
            <View
              style={{
              }}
            >
              <Text>Phone: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View>
              <Text>Address: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View>
              <Text>City: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View>
              <Text>State: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View>
              <Text>Zipcode: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
            <View>
              <Text>Country: <TextInput style={{backgroundColor:'red'}}></TextInput></Text>
            </View>
          </View>
        </View>
          <View style={{flex:1, backgroundColor:'yellow'}}>
            <Text style={{flex:1}}>About : 
<TextInput style={{backgroundColor:'red'}}></TextInput></Text>
          </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
        <Details />
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

export default EnterDetailsScreen;