import Header from "../components/Header";
import ReturnToHomeFooter from "../components/ReturnToHomeFooter";
import { Departments } from "../data/staffList";
import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp, StaffArray } from "../src/types";
import React, { useState } from "react";
import {
  EditExistingStaff,
  getDepartmentsList,
  getStaffList,
} from "../data/staffServices";
import RenderSeperator from "../components/RenderSeperator";

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {
    id,
    name,
    phone,
    department,
    address,
    city,
    state,
    zip,
    country,
    description,
  } = route.params;
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

  const [staffData, setStaffData] = useState<StaffArray>([]);
  const [filteredStaffData, setFilteredStaffData] = useState<StaffArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [departmentList, setDepartmentList] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<any[]>([]);

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

  function handleSave() {
    const edittedstaff = EditExistingStaff(
      id,
      newName,
      newDepartment,
      newPhone,
      newAddress,
      newCity,
      newState,
      newZip,
      newCountry,
      newDescription
    );
    edittedstaff.then((data) => console.log(data));
    setEditMode(true);
  }

  return (
    <View style={styles.container}>
      <Header
        staffData={staffData}
        setFilteredStaffData={setFilteredStaffData}
        departmentsList={departmentList}
      />
      <ScrollView style={{ flex: 4, backgroundColor: "#c64c38" }}>
        {NoEdit == true && (
          <View style={styles.DetailsContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginBottom: 70,
                backgroundColor: "",
              }}
            >
              {/*profile picture*/}
              <View
                style={{
                  flex: 1,
                  backgroundColor: "",
                  minWidth: 200,
                  maxWidth: 200,
                  minHeight: 200,
                  marginLeft:20,
                  marginTop: 20
                }}
              >
                <Image
                  source={require("../assets/profile.jpg")}
                  style={{ flex: 1, resizeMode: "contain" }}
                />
              </View>
              {/*view box for minimised view*/}
              <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={styles.detailsText}
                  >{`     Name:               ${newName}`}</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.detailsText}>
                    {`     Department:     ${
                      Departments[parseInt(newDepartment)]
                    }`}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={styles.detailsText}
                  >{`     Phone:              ${newPhone}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.detailsText}
                  >{`     Address:           ${newAddress}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.detailsText}
                  >{`     City:                  ${newCity}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.detailsText}
                  >{`     State:                ${newState}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.detailsText}
                  >{`     Zipcode:            ${newZip}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.detailsText}
                  >{`     Country:           ${newCountry}`}</Text>
                </View>
              </View>
              <Pressable
                style={styles.button}
                onPress={(e) => {
                  setEditMode(false);
                }}
              >
                <Text>Edit</Text>
              </Pressable>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "",
                marginTop: 40,
                paddingTop: 20,
                paddingHorizontal:20
              }}
            >
              <RenderSeperator />
              <Text
                style={{
                  flex: 1,
                  color: "#262626",
                  fontFamily: "trebuchet",
                  paddingTop: 20,
                }}
              >
                About {name}:
              </Text>
              <Text
                style={{ flex: 1, color: "#262626", fontFamily: "trebuchet" }}
              >
                {newDescription}
              </Text>
            </View>
          </View>
        )}
        {NoEdit == false && (
          <View style={styles.DetailsContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginBottom: 70,
                zIndex: 1,
              }}
            >
              {/*profile picture*/}
              <View
                style={{
                  flex: 1,
                  backgroundColor: "",
                  minWidth: 200,
                  maxWidth: 200,
                  minHeight: 200,
                  marginLeft:20,
                  marginTop: 20
                }}
              >
                <Image
                  source={require("../assets/profile.jpg")}
                  style={{ flex: 1, resizeMode: "contain" }}
                />
              </View>
              {/*view box for minimised view*/}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingTop: 20,
                  zIndex: 1,
                  minWidth: 400,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.editModeText}>
                    {`     Name:               `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newName}
                      onChangeText={(text) => {
                        setNewName(text);
                      }}
                    />
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "",
                      width: 500,
                      zIndex: 1,
                      color: "#262626",
                      fontFamily: "trebuchet",
                    }}
                  >
                    {`     Department:     `}
                    <DropDownPicker
                      placeholder={Departments[parseInt(newDepartment)]}
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
                        items.forEach(function (item, index) {
                          if (item.value == value) {
                            setNewDepartment(index.toString());
                          }
                        });
                      }}
                      style={{ width: 300, maxWidth: 500, minWidth: 200 }}
                      dropDownContainerStyle={{ maxWidth: 300, minWidth: 250 }}
                      listItemContainerStyle={{
                        height: 30,
                        maxWidth: 300,
                        minWidth: 250,
                      }}
                      selectedItemContainerStyle={{
                        backgroundColor: "#D9D9D9",
                      }}
                    />
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center", paddingTop:10
                  }}
                >
                  <Text style={styles.editModeText}>
                    {`     Phone:              `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newPhone}
                      onChangeText={(text) => {
                        setNewPhone(text);
                      }}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={styles.editModeText}>
                    {`     Address:           `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newAddress}
                      onChangeText={(text) => {
                        setNewAddress(text);
                      }}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={styles.editModeText}>
                    {`     City:                  `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newCity}
                      onChangeText={(text) => {
                        setNewCity(text);
                      }}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={styles.editModeText}>
                    {`     State:                `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newState}
                      onChangeText={(text) => {
                        setNewState(text);
                      }}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={styles.editModeText}>
                    {`     Zipcode:            `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newZip}
                      onChangeText={(text) => {
                        setNewZip(text);
                      }}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={styles.editModeText}>
                    {`     Country:           `}
                    <TextInput
                      style={styles.editTextInput}
                      defaultValue={newCountry}
                      onChangeText={(text) => {
                        setNewCountry(text);
                      }}
                    />
                  </Text>
                </View>
              </View>
              <Pressable style={styles.button} onPress={handleSave}>
                <Text>Save</Text>
              </Pressable>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "",
                marginTop: 20,
                paddingTop: 20,
              }}
            >
              <RenderSeperator />
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 20,
                  marginTop:20,
                  paddingTop:10
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "#262626",
                    fontFamily: "Trebuchet",
                  }}
                >
                  About {name}:
                </Text>
                  <View style={{flex:1}} >
                <TextInput
                  style={{
                    width: "100%",
                    color: "#262626",
                    fontFamily: "Trebuchet",
                    backgroundColor: "#D9D9D9",
                  }}
                  multiline
                  defaultValue={newDescription}
                  onChangeText={(text) => {
                    setNewDescription(text);
                  }}
                />
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <ReturnToHomeFooter NoEdit={NoEdit} />
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
    zIndex: 1,
    backgroundColor: "#cb6d4f",
    margin: 20,
  },
  detailsText: {
    backgroundColor: "",
    maxWidth: 500,
    minWidth: 250,
    color: "#262626",
    fontFamily: "Trebuchet",
    paddingBottom: 10,
  },
  editModeText: {
    backgroundColor: "",
    width: 500,
    color: "#262626",
    fontFamily: "Trebuchet",
    paddingBottom: 10,
  },
  editTextInput: {
    width: 200,
    maxWidth: 300,
    minWidth: 100,
    color: "#262626",
    fontFamily: "trebuchet",
    backgroundColor: "#D9D9D9",
  },
  button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    maxWidth: 100,
    marginTop: 20,
    height: "20%",
    marginRight: 40,
    textAlign: "center",
    paddingTop: 5,
  },
});

export default DetailScreen;
