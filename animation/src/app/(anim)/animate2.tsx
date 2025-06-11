import Button from '@/src/components/Button'
import Animate2 from '@/src/components/Reanimated/Animate2'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const animate2 = () => {
  const router = useRouter()
  return (
    <View className='flex-1 bg-green-100'> 
    {/* above bg-green-100 will set the status bar wala color to greem else it is white */}
      <TouchableOpacity className='w-10 h-10 bg-gray-800 rounded-xl justify-center absolute top-12 z-10 left-4' onPress={()=>router.back()}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="white" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} className='mt-10'>
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
    </View>
  )
}

export default animate2


