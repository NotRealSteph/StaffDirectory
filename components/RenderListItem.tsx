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
            <View style={{ width: 150, height: PictureHeight }}>
              <Image
                source={require("../assets/profile.jpg")}
                style={{
                  width: PictureWidth,
                  height: PictureHeight,
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
                  <Text style={styles.listText}>{data.name}</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.listText}>
                    {Departments[parseInt(data.department)]}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.listText}>{data.phone}</Text>
                </View>
              </View>
              {/*view box for expanded view*/}
              {PressedState == true && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "#cb6d4f",
                  }}
                >
                  <View>
                    <Text style={styles.listText}>Address: {data.address}</Text>
                  </View>
                  <View>
                    <Text style={styles.listText}>City: {data.city}</Text>
                  </View>
                  <View>
                    <Text style={styles.listText}>State: {data.state}</Text>
                  </View>
                  <View>
                    <Text style={styles.listText}>Zipcode: {data.zip}</Text>
                  </View>
                  <View>
                    <Text style={styles.listText}>Country: {data.country}</Text>
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
    listText: { textAlign: "center", color: '#262626',fontFamily:'Trebuchet' },
    ListItem: {
      flex: 1,
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: "#cb6d4f",
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