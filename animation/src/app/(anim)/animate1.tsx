import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/src/components/Button'

const animate1 = () => {
  return (
    <View className='bg-blue-200 flex-1 py-14 px-4'>
      <View className='ring-2 ring-slate-200 rounded-lg p-4'>
        <Text>animate1</Text>
        <Text>animate1</Text>
        <Text>animate1</Text>
        {/* <Button /> */}
        <View className='ring-2 ring-slate-200 rounded-lg justify-center items-center'>
            <Button />
        </View>
      </View>
    </View>
  )
}

export default animate1