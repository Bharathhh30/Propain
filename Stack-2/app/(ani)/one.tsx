import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const one = () => {
      const router = useRouter()
  
  return (
    <View>
      <Text>one</Text>
      <Pressable onPress={()=>router.push("/two")}>
              <Text>One.tsx</Text>
            </Pressable>
    </View>
  )
}

export default one