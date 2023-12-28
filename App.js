import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';


export default function App() {
  const {colorScheme,toggleColorScheme} = useColorScheme();
  console.log(colorScheme);
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900">
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-2xl font-bold dark:text-white8">Toggle Theme</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View> 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
