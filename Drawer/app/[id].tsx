import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Page = () => {
    const {id} = useLocalSearchParams()
  return (
    <>
        <Stack.Screen options={{title:`Page ${id}`}} /> 
        <View>
            <Text>You are on page {id} </Text>
        </View>
    </>
  )
}

export default Page