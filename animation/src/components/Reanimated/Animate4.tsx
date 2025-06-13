import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Animate4 = () => {

    const progress = useSharedValue(0);

    useEffect(()=>{
        progress.value = withRepeat(withTiming(1,{duration:2000}),-1,true)
    },[])
    const animateStyle = useAnimatedStyle(() => {
        const radius = 100;
        const angle = progress.value * Math.PI;

        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)
        return {
            transform: [{ translateX: x }, { translateY: y }],
        }
    })

  return (
    <View className='items-center space-y-2'>
      <Text className='text-amber-300'>Animate 3 (Component Name)</Text>
      <Text className='text-sm'> Circular animations</Text>
      {/* lets keep a circular curve animations */}
      <View className='h-96 justify-center items-center'>
        <Animated.View
            className={"w-10 h-10 bg-blue-500 rounded-full"}
            style = {animateStyle}
        />
      </View>
    </View>
  )
}

export default Animate4
