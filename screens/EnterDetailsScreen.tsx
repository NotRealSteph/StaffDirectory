import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import {
  getDepartmentsList,
  getStaffList,
  saveNewStaff,
} from "../data/staffServices";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import {
  HomeScreenNavigationProp,
  StaffArray,
} from "../src/types";
import React, { useState } from "react";
import RenderSeperator from "../components/RenderSeperator";

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

  const [staffData, setStaffData] = useState<StaffArray>([]);
  const [departmentList, setDepartmentList] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<any[]>([]);
  const [filteredStaffData, setFilteredStaffData] = useState<StaffArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [NoEdit, setEditMode] = useState<boolean>(false);

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
          setItems(data);
        })
        .catch((error) => console.error(error));
    }, [])
  );

  const saveStaff = function () {
    saveNewStaff(
      name,
      department,
      phone,
      address,
      city,
      state,
      zipcode,
      country,
      description
    )
      .then(() => {
        console.log("staff added");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        staffData={staffData}
        setFilteredStaffData={setFilteredStaffData}
        departmentsList={departmentList}
      />
      <View style={styles.DetailsContainer}>
        <View style={{ flex: 1, flexDirection: "row", zIndex: 1,marginBottom: 70, }}>
          {/*profile picture*/}
          <View
            style={{
                  flex: 1,
                  backgroundColor: "",
                  maxWidth: 200,
                  minHeight: 200,
                  marginTop:20,
                  marginLeft:20
            }}
          >
            <Image
              source={require("../assets/profile.jpg")}
              style={{ flex:1, resizeMode:'contain' }}
            />
          </View>
          {/*view box for minimised view*/}
          <View style={{ flex: 1, paddingTop: 20, zIndex: 1, alignItems:'center' }}>
            <View style={{}}>
              <Text style={styles.textStyle}>
                Name:{" "}
                <TextInput
                  key="name"
                  placeholder="Type your name in here"
                  onChangeText={(newText) => setName(newText)}
                  defaultValue={name}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View style={{ zIndex: 1 }}>
              <Text style={{ zIndex: 1,color: '#262626',fontFamily:'Trebuchet'  }}>
                Department:{" "}
                <DropDownPicker
                  placeholder="Select an item"
                  schema={{
                    label: "label",
                    value: "value",
                    containerStyle: "containerStyle",
                    labelStyle: "labelStyle",
                  }}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  onChangeValue={(value) => {
                    items.forEach(function(item, index) {
                      if(item.value == value){
                        setDepartment(index.toString());
                      }
                    });
                  }}
                  style={{ width:300, maxWidth: 500, minWidth:250 }}
                      dropDownContainerStyle={{ maxWidth: 500, minWidth:250 }}
                      listItemContainerStyle={{ height: 30, maxWidth: 500, minWidth:250 }}
                      selectedItemContainerStyle={{
                        backgroundColor: "#D9D9D9",
                      }}
                />
              </Text>
            </View>
            <View style={{paddingTop:20}}>
              <Text style={styles.textStyle}>
                Phone:{" "}
                <TextInput
                  key="phone"
                  placeholder="Type your phone number in here"
                  onChangeText={(newText) => setPhone(newText)}
                  defaultValue={phone}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View>
              <Text style={styles.textStyle}>
                Address:{" "}
                <TextInput
                  key="address"
                  placeholder="Type your address in here"
                  onChangeText={(newText) => setAddress(newText)}
                  defaultValue={address}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View>
              <Text style={styles.textStyle}>
                City: {"  "}
                <TextInput
                  key="city"
                  placeholder="Type your city in here"
                  onChangeText={(newText) => setCity(newText)}
                  defaultValue={city}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View>
              <Text style={styles.textStyle}>
                State:{" "}
                <TextInput
                  key="state"
                  placeholder="Type your state in here"
                  onChangeText={(newText) => setState(newText)}
                  defaultValue={state}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View>
              <Text style={styles.textStyle}>
                Zipcode:{" "}
                <TextInput
                  key="zip"
                  placeholder="Type your zipcode in here"
                  onChangeText={(newText) => setZipcode(newText)}
                  defaultValue={zipcode}
                  style={styles.editText}
                />
              </Text>
            </View>
            <View>
              <Text style={styles.textStyle}>
                Country:{" "}
                <TextInput
                  key="country"
                  placeholder="Type your country in here"
                  onChangeText={(newText) => setCountry(newText)}
                  defaultValue={country}
                  style={styles.editText}
                />
              </Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: pressed ? "white" : "beige",
              },
              styles.Button,
            ]}
            onPress={(e) => {
              if (
                name.trim() === "" ||
                department.trim() === "" ||
                phone.trim() === "" ||
                address.trim() === "" ||
                city.trim() === "" ||
                state.trim() === "" ||
                zipcode.trim() === "" ||
                country.trim() === ""
              ) {
                alert("Please fill out all staff information");
              } else {
                saveStaff();
                navigation.navigate("Home");
              }
            }}
          >
            <Text >Save</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, backgroundColor: "", marginTop:40, marginHorizontal:20, paddingTop:20 }}>
          <RenderSeperator />
          <Text style={{ flex: 1,color: '#262626',fontFamily:'Trebuchet', paddingTop:20  }}>
            About :
            <TextInput
              key="desc"
              placeholder="Type your profile description in here"
              onChangeText={(newText) => setDescription(newText)}
              defaultValue={description}
              style={{ backgroundColor: "", width: 500,color: '#262626',fontFamily:'Trebuchet' }}
            />
          </Text>
        </View>
      </View>
      <ReturnToHomeFooter NoEdit={NoEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    backgroundColor: '#c64c38'
  },
  DetailsContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    zIndex: 1,
    margin:20,
    backgroundColor:'#cb6d4f'
  },
  textStyle: {
    paddingBottom:20,
    color: '#262626',
    fontFamily:'Trebuchet' 
  },
  Button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    maxWidth: 100,
    marginTop: 20,
    height: "20%",
    marginRight: 40,
    textAlign: "center",
    paddingTop: 5,
  },
  editText: { backgroundColor: "#D9D9D9", width: 300,color: '#262626',fontFamily:'Trebuchet'  }
});

export default EnterDetailsScreen;
