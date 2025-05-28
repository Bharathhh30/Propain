import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router =  useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "white"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={()=>router.push("/(ani)/main")}>
        <Text>Hit me yaa i say</Text>
          <Text>check with versions</Text>
      </Pressable>
      
    </View>
  );
}
