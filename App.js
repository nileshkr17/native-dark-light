import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, View,Image } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900">
      <StatusBar style={colorScheme=='dark'?'light':'dark'} />
      <Image className="rounded-full h-40 w-40" source={require("./assets/nileshkr.jpeg")} />
      <Text className="text-4xl font-bold dark:text-white">Nilesh Singh</Text>
      <Text className="text-sm text-center dark:text-white">
      Hi, I am Nilesh . A student of Silicon Institute Of Technology, Bhubaneswar and Website Head of TEDxSITB.
      </Text>

     <Text className="text-md font-bold text-justify p-2 dark:text-white">
        As a passionate computer science student at Silicon Institute Of
        Technology, Bhubaneswar, I am determined to pursue a career in
        full-stack web development. I have a strong interest in open-source
        technologies and strive to learn something new every day to enhance my
        skills. Currently, I am honing my expertise in TypeScript to build more
        robust and scalable applications. With an eye for detail and a love for
        problem-solving, I enjoy taking on challenges and working
        collaboratively to develop innovative solutions.{" "}
      </Text>
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-2xl font-bold dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>
      {/* fix in the bottom */}
      <View className="flex-2">
        <Text className="text-2xl font-bold dark:text-white">Contact Me</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <Text className="text-2xl font-bold dark:text-white">Email</Text>
          <Text className="text-2xl font-bold dark:text-white">
            </Text>
            </View>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
