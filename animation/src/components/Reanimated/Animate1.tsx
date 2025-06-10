import { View, Text,  } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import React from 'react'
import Button from '../Button';

const Animate1 = () => {
    const width = useSharedValue(100);

    const handlePress = () =>{
        width.value = withSpring(width.value+45);  // Increment width by 50px
    }

  return (
    <View className='gap-y-2 items-center'>
      <Text className='text-white'>Animate1 (Component name)</Text>
      <Text className='text-sm'>withSpring and smooth animation - basic</Text>
      <Animated.View
         className='  rounded-2xl '
        style={{
            width,
            height: 100,
            backgroundColor: 'tomato',
        }}
       />
       <Button text='expand' onPress={handlePress} />
       <Button text='deduce' onPress={()=>{
            width.value = withSpring(width.value -50);  // Reset width to 100px
       }} />
    </View>
  )
}

export default Animate1

// withSpring is used to animate the width change smoothly.
// withSpring(width.value -50)
// withSpring(width.value + 50)