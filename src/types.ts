import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { ListRenderItemInfo } from "react-native";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    name: string;
    phone: string;
    department: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  EnterDetails: undefined;
};

export interface IStaff {
  id: string;
  name: string;
  phone: string;
  department: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Details",
  "EnterDetails"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Details"
>;

export type EnterDetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "EnterDetails"
>;
