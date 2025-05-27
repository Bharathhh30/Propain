import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const main = () => {
    const router = useRouter()
  return (
    <View>
      <Text>main</Text>
      <Pressable onPress={()=>router.push("/one")}>
        <Text>One.tsx</Text>
      </Pressable>
    </View>
  )
}

export default main