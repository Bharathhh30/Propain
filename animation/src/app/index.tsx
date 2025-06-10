import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      className="flex-1 items-center justify-center "
    >
      <Text className="text-red-400">Edit app to edit this screen.</Text>
      <View className="w-auto bg-red-300 p-4 rounded-full mt-4 ">
        <Pressable className="text-white" onPress={() => router.push("/(anim)/animate1")}>
          <Text>Animate 1</Text>
        </Pressable>
      </View>
    </View>
  );
}
