import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/src/components/Button'
import Animate1 from '@/src/components/Reanimated/Animate1'

const animate1 = () => {
  return (
    <View className='bg-blue-200 flex-1 py-14 px-4 flex-col gap-y-4'>
      <View className='ring-2 ring-slate-200 rounded-lg p-4'>
        <Text>This is a React Native Fast Refresh behavior. On every save, Fast Refresh reloads and re-renders components. If the navigation state isn't persisted, the app resets to the initial route (usually the home/index screen).</Text>
        {/* <Button /> */}
        <View className='ring-2 ring-slate-200 rounded-lg mt-2 p-2 justify-center items-center'>
            <Button />
        </View>
      </View>
      <View className='ring-2 p-4 ring-slate-200 rounded-lg justify-center items-center'>
        <Text className='text-center text-lg font-bold mt-4'>animate1 (file name)</Text>
        <Animate1 />
      </View>
    </View>
  )
}

export default animate1