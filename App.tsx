import { StatusBar } from 'expo-status-bar';

import RootNavigator from './src/RootNavigator';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}