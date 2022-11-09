import { useState} from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import { Departments} from "../data/staffList";
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp, IStaff } from '../src/types';
import { getStaffByName } from "../data/staffServices";

const RenderListItem = ({data}: {data:IStaff}) =>{
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [PressedState, setPressedState] = useState<boolean>(false);
    const [PictureHeight, setPictureHeight] = useState<number>(100);
    const [PictureWidth, setPictureWidth] = useState<number>(100);

    const handleLongPress = () => {
      getStaffByName(data.name).then((data) => {
        if (data) {
          navigation.navigate("Details", {
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
          console.log("not found");
        }
      });
    };

    return (
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: pressed ? "white" : "beige",
            },
            styles.ListItem,
          ]}
          onPress={() => {
            setPressedState(!PressedState);
            if (!PressedState) {
              setPictureHeight(150);
              setPictureWidth(150);
            } else {
              setPictureHeight(100);
              setPictureWidth(100);
            }
          }}
          onLongPress={handleLongPress}
        >
          <View style={styles.ItemBox}>
            {/*profile picture*/}
            <View style={{ width: PictureWidth, height: PictureHeight }}>
              <Image
                source={require("../assets/profile.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "flex-start",
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              {/*view box for minimised view*/}
              <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text>{data.name}</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={{ textAlign: "center" }}>
                    {Departments[parseInt(data.department)]}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text>{data.phone}</Text>
                </View>
              </View>
              {/*view box for expanded view*/}
              {PressedState == true && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "yellow",
                  }}
                >
                  <View>
                    <Text>Address: {data.address}</Text>
                  </View>
                  <View>
                    <Text>City: {data.city}</Text>
                  </View>
                  <View>
                    <Text>State: {data.state}</Text>
                  </View>
                  <View>
                    <Text>Zipcode: {data.zip}</Text>
                  </View>
                  <View>
                    <Text>Country: {data.country}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </Pressable>
    )
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
    button: {
      backgroundColor: "#DDDDDD",
      flex: 1,
      marginTop: 20,
      height: "49%",
      marginRight: 5,
    },
  });

export default RenderListItem;