import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const two = () => {
      const router = useRouter()
  
  return (
    <View>
      <Text>two</Text>
      <Pressable onPress={()=>router.push("/three")}>
              <Text>One.tsx</Text>
            </Pressable>
    </View>
  )
}

export default two