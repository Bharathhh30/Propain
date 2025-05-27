import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  return (
    <View>
      <Text>index hi</Text>
      <Pressable onPress={()=>router.push("/(tabs)/index")}>
        <Text>(tabs)/index</Text>
      </Pressable>
    </View>
  )
}

export default index