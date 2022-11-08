import { Image, Text, View, TouchableOpacity } from "react-native";

const HeaderTop = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
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
          width: "3%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
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
  );
};

export default HeaderTop;
