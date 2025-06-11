import React from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Button from '../Button';

const Animate2 = () => {
    const opacity = useSharedValue<number>(1);
    const scale = useSharedValue<number>(1);
    const rotate = useSharedValue<number>(0)
    const translateX = useSharedValue<number>(0);
    // first define a variable to track the position value
    const translateX2 = useSharedValue<number>(0);
    // const handlePressForward = () =>{
    //     translateX.value = withSpring(translateX.value+25)
    // }
    const handlePressForward = () =>{
        translateX.value += 25
    }
    const animatedStyles = useAnimatedStyle(() => ({
        transform : [{translateX : withSpring(translateX.value*2)}]
    }))
    
    // const handlePressBackward = () =>{
    //     translateX.value = withSpring(translateX.value-25)
    // }

    const handlePressBackward = () =>{
        translateX.value -= 25
    }
    const animatedStylesB = useAnimatedStyle(()=>({
        transform : [{translateX:withSpring(translateX.value*3)}]
    }))

    const handlePressLeft = () =>{
        translateX2.value -= 30
    }
    const handlePressRight = () => {
        translateX2.value += 30
    }

    // const animatedStylesR = useAnimatedStyle(()=>({
    //     transform : [{translateX : translateX2.value}]
    // }))

    // const animatedStylesL = useAnimatedStyle(()=>({
    //     transform : [{translateX : withSpring(translateX2.value) }]
    // }))
    const animatedStylePosition = useAnimatedStyle(()=>{
        const rotation = withSpring(rotate.value); // animate the numeric value
        return {
            transform : [
                {translateX : withSpring(translateX2.value) },
                {scale : withSpring(scale.value)},
                {rotateZ:`${rotate.value}deg`},
            ],
            opacity : withSpring(opacity.value)
        }
    })

    // opacity and scale

    

    const handleToggle = () => {
        // console.log("Entered handleToggle Function")
        if (scale.value > 0.9){
            scale.value = 0.7;
            opacity.value = 0.3;
            rotate.value = 45
        }else{
            scale.value=1;
            opacity.value=1;
            rotate.value = 0
        }
    }

  return (
    <View className='items-center space-y-2'>
      <Text className='text-amber-300'>Animate2 (Component name)</Text>
      <Text className='text-sm'>Single Line description</Text>
      {/* purple sqyare */}
      <View className='items-center'>
      {/* <Animated.View className={"w-20 h-20 mt-10 bg-purple-400 rounded-lg my-2"} style={{transform:[{translateX}]}}  /> */}
        <Animated.View className={"w-20 h-20 mt-10 bg-purple-400 rounded-lg my-2"} style={[animatedStyles]}  />
        <View className='flex-row gap-1'>
            <Button text={"forward"} onPress={handlePressForward}/>
            <Button text={"backward"} onPress={handlePressBackward}/>
        </View>
      </View>

      {/* orange sqyare */}
      <View className='ring-2 mt-2 gap-y-2 items-center'>
        <Animated.View  className={"w-20 h-20 bg-orange-400 rounded-lg my-2"} style={[animatedStylePosition]}/>
        <View className='flex-row gap-1'>
            <Button text={"left"} onPress={handlePressLeft} />
            <Button text={"right"} onPress={handlePressRight} />
        </View>
        {/* toggole and opacity related */}
        <View>
            <Button text={"toggle"} onPress={handleToggle} />
        </View>
      </View>
      
    </View>
  )
}

export default Animate2

/*
    You only need one useAnimatedStyle per shared value or per combined style logic.
    You don't need separate hooks for left and right movements — those are not separate animations, 
    they are just updates to the same shared value.


*/