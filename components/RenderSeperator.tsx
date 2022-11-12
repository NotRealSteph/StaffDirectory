import React from "react";
import { View } from "react-native";

const renderSeparator = () => {
    return (
      <View
        style={{
          alignContent:'stretch',
          height: 2,
          width: '90%',
          backgroundColor: '#262626',
          marginLeft: '5%'
        }}
      />
    )
  }

  export default renderSeparator;