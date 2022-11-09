import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import { Departments } from "../data/staffList";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp} from "../src/types";
import React, { useState } from "react";
import { EditExistingStaff } from "../data/staffServices";

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id, name, phone, department, address, city, state, zip, country, description } =
    route.params;
  const [newName, setNewName] = useState<string>(name);
  const [newPhone, setNewPhone] = useState<string>(phone);
  const [newDepartment, setNewDepartment] = useState<string>(department);
  const [newAddress, setNewAddress] = useState<string>(address);
  const [newCity, setNewCity] = useState<string>(city);
  const [newState, setNewState] = useState<string>(state);
  const [newZip, setNewZip] = useState<string>(zip);
  const [newCountry, setNewCountry] = useState<string>(country);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [NoEdit, setEditMode] = useState<boolean>(true);

  // const Details = () => {
  //   return (
  //     <View style={styles.DetailsContainer}>
  //       <View style={{flex:1, flexDirection:'row', marginBottom:70, backgroundColor:'red'}}>
  //       {/*profile picture*/}
  //         <View style={{
  //             width: 200,
  //             height: 200,
  //             backgroundColor:'red'
  //           }} >
  //         <Image
  //           source={require("../assets/profile.jpg")}
  //           style={{width:"100%", height:"100%"}} />
  //         </View>
  //         {/*view box for minimised view*/}
  //         <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text>{newName}</Text>
  //           </View>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text style={{ textAlign: "center" }}>
  //               {Departments[parseInt(newDepartment)]}
  //             </Text>
  //           </View>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text>{newPhone}</Text>
  //           </View>
  //           <View>
  //             <Text>Address: {newAddress}</Text>
  //           </View>
  //           <View>
  //             <Text>City: {newCity}</Text>
  //           </View>
  //           <View>
  //             <Text>State: {newState}</Text>
  //           </View>
  //           <View>
  //             <Text>Zipcode: {newZip}</Text>
  //           </View>
  //           <View>
  //             <Text>Country: {newCountry}</Text>
  //           </View>
  //         </View>
  //         <Pressable style={styles.button} onPress={(e)=>{setEditMode(false)}}><Text>Edit</Text></Pressable>
  //       </View>
        
  //         <View style={{flex:1, backgroundColor:'yellow'}}>
  //           <Text style={{flex:1}}>About {name}:</Text>
  //           <Text style={{flex:1}}>{newDescription}</Text>
  //         </View>
  //     </View>
  //   );
  // };

  // const EditDetails = () => {
  //   return (
  //     <View style={styles.DetailsContainer}>
  //       <View style={{flex:1, flexDirection:'row', marginBottom:70}}>
  //       {/*profile picture*/}
  //         <View style={{
  //             width: 200,
  //             height: 200,
  //             backgroundColor:'red'
  //           }} >
  //         <Image
  //           source={require("../assets/profile.jpg")}
  //           style={{width:"100%", height:"100%"}} />
  //         </View>
  //         {/*view box for minimised view*/}
  //         <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text style={{ backgroundColor:'red', width:500}}>     Name:               <TextInput style={{width:'70%'}} defaultValue={newName} onChangeText={(text)=> {setNewName(text)}}/></Text>
  //           </View>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text style={{ backgroundColor:'red', width:500}}>     Department:     <TextInput style={{width:'70%'}} defaultValue={Departments[parseInt(newDepartment)]} onChangeText={(text)=> {setNewDepartment(text)}}/>
  //             </Text>
  //           </View>
  //           <View
  //             style={{
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text style={{ backgroundColor:'red', width:500}}>     Phone:              <TextInput style={{width:'70%'}} defaultValue={newPhone} onChangeText={(text)=> {setNewPhone(text)}}/></Text>
  //           </View>
  //           <View>
  //             <Text style={{ backgroundColor:'red', width:500}}>     Address:           <TextInput style={{width:'70%'}} defaultValue={newAddress} onChangeText={(text)=> {setNewAddress(text)}}/></Text>
  //           </View>
  //           <View>
  //             <Text style={{ backgroundColor:'red', width:500}}>     City:                  <TextInput style={{width:'70%'}} defaultValue={newCity} onChangeText={(text)=> {setNewCity(text)}}/></Text>
  //           </View>
  //           <View>
  //             <Text style={{ backgroundColor:'red', width:500}}>     State:                <TextInput style={{width:'70%'}} defaultValue={newState} onChangeText={(text)=> {setNewState(text)}}/></Text>
  //           </View>
  //           <View>
  //             <Text style={{ backgroundColor:'red', width:500}}>     Zipcode:            <TextInput style={{width:'70%'}} defaultValue={newZip} onChangeText={(text)=> {setNewZip(text)}}/></Text>
  //           </View>
  //           <View>
  //             <Text style={{ backgroundColor:'red', width:500}}>     Country:           <TextInput style={{width:'70%'}} defaultValue={newCountry} onChangeText={(text)=> {setNewCountry(text)}}/></Text>
  //           </View>
  //         </View>
  //         <Pressable style={styles.button} onPress={handleSave}><Text>Save</Text></Pressable>
  //       </View>
  //         <View style={{flex:1, backgroundColor:'yellow'}}>
  //           <Text style={{flex:1}}>About {name}:</Text>
  //           <Text style={{flex:1}}><TextInput style={{width:'100%'}} multiline defaultValue={newDescription} onChangeText={(text)=> {setNewDescription(text)}}/></Text>
  //         </View>
  //     </View>
  //   );
  // };

  function handleSave(){
    EditExistingStaff(id, newName, newPhone, newDepartment, newAddress, newCity, newState, newZip, newCountry, newDescription);
    setEditMode(true)};
  

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{flex:4}}>
        {NoEdit == true && (
          <View style={styles.DetailsContainer}>
          <View style={{flex:1, flexDirection:'row', marginBottom:70, backgroundColor:'red'}}>
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
                <Text>{newName}</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  {Departments[parseInt(newDepartment)]}
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text>{newPhone}</Text>
              </View>
              <View>
                <Text>Address: {newAddress}</Text>
              </View>
              <View>
                <Text>City: {newCity}</Text>
              </View>
              <View>
                <Text>State: {newState}</Text>
              </View>
              <View>
                <Text>Zipcode: {newZip}</Text>
              </View>
              <View>
                <Text>Country: {newCountry}</Text>
              </View>
            </View>
            <Pressable style={styles.button} onPress={(e)=>{setEditMode(false)}}><Text>Edit</Text></Pressable>
          </View>
          
            <View style={{flex:1, backgroundColor:'yellow'}}>
              <Text style={{flex:1}}>About {name}:</Text>
              <Text style={{flex:1}}>{newDescription}</Text>
            </View>
        </View>
        )}
        {NoEdit == false && (
          <View style={styles.DetailsContainer}>
          <View style={{flex:1, flexDirection:'row', marginBottom:70}}>
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
                <Text style={{ backgroundColor:'red', width:500}}>     Name:               <TextInput style={{width:'70%'}} defaultValue={newName} onChangeText={(text)=> {setNewName(text)}}/></Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text style={{ backgroundColor:'red', width:500}}>     Department:     <TextInput style={{width:'70%'}} defaultValue={Departments[parseInt(newDepartment)]} onChangeText={(text)=> {setNewDepartment(text)}}/>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text style={{ backgroundColor:'red', width:500}}>     Phone:              <TextInput style={{width:'70%'}} defaultValue={newPhone} onChangeText={(text)=> {setNewPhone(text)}}/></Text>
              </View>
              <View>
                <Text style={{ backgroundColor:'red', width:500}}>     Address:           <TextInput style={{width:'70%'}} defaultValue={newAddress} onChangeText={(text)=> {setNewAddress(text)}}/></Text>
              </View>
              <View>
                <Text style={{ backgroundColor:'red', width:500}}>     City:                  <TextInput style={{width:'70%'}} defaultValue={newCity} onChangeText={(text)=> {setNewCity(text)}}/></Text>
              </View>
              <View>
                <Text style={{ backgroundColor:'red', width:500}}>     State:                <TextInput style={{width:'70%'}} defaultValue={newState} onChangeText={(text)=> {setNewState(text)}}/></Text>
              </View>
              <View>
                <Text style={{ backgroundColor:'red', width:500}}>     Zipcode:            <TextInput style={{width:'70%'}} defaultValue={newZip} onChangeText={(text)=> {setNewZip(text)}}/></Text>
              </View>
              <View>
                <Text style={{ backgroundColor:'red', width:500}}>     Country:           <TextInput style={{width:'70%'}} defaultValue={newCountry} onChangeText={(text)=> {setNewCountry(text)}}/></Text>
              </View>
            </View>
            <Pressable style={styles.button} onPress={handleSave}><Text>Save</Text></Pressable>
          </View>
            <View style={{flex:1, backgroundColor:'yellow'}}>
              <Text style={{flex:1}}>About {name}:</Text>
              <Text style={{flex:1}}><TextInput style={{width:'100%'}} multiline defaultValue={newDescription} onChangeText={(text)=> {setNewDescription(text)}}/></Text>
            </View>
        </View>
        )}
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
  button: {
    backgroundColor: "#DDDDDD",
    width:100,
    marginTop: 20,
    height: "49%",
    marginRight: 5,
  },
});

export default DetailScreen;
