import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const three = () => {
        const router = useRouter()
  
  return (
    <View>
      <Text>three</Text>
      <Pressable onPress={()=>router.dismissTo('/')}>
              <Text>back to index directly</Text>
                
            </Pressable>
            <Pressable onPress={()=>router.replace('/one')}>
              <Text>reaplce with two </Text>
                <Text>main - one - two - three - two</Text>
            </Pressable>
    </View>
  )
}

export default three

