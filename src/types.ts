import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    id: string;
    name: string;
    phone: string;
    department: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    description: string;
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
  description: string;
}

export type StaffArray = {
  id: string;
  name: string;
  phone: string;
  department: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  description: string;
}[];

export type IheaderProps = {
  staffData: StaffArray;
  setFilteredStaffData: React.Dispatch<React.SetStateAction<StaffArray>>;
  departmentsList: any[];
};

export type IFooterProps = {
  NoEdit: boolean;
};

export type ItemType<T> = {
  label?: string;
  value?: T;
  icon?: () => void;
  parent?: T;
  selectable?: boolean;
  disabled?: boolean;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

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
