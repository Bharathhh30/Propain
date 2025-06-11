import Button from '@/src/components/Button'
import Animate2 from '@/src/components/Reanimated/Animate2'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const animate2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View className='bg-green-100 flex-1 py-14 px-4 flex-col gap-y-4'>
      <View className='ring-2 ring-slate-200 rounded-lg p-4'>
        <Text>This is a React Native Fast Refresh behavior. On every save, Fast Refresh reloads and re-renders components. If the navigation state isn't persisted, the app resets to the initial route (usually the home/index screen).</Text>
        {/* <Button /> */}
        <View className='ring-2 ring-slate-200 rounded-lg mt-2 p-2 justify-center items-center'>
            <Button />
        </View>
      </View>
      <View className='ring-2 p-4 ring-slate-200 rounded-lg justify-center items-center'>
        <Text className='text-center text-lg font-bold mt-4'>animate1 (file name)</Text>
        <Animate2 />
      </View>
    </View>
    </ScrollView>
  )
}

export default animate2