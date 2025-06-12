import React from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Circle, SvgProps } from 'react-native-svg';
import Button from '../Button';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);




const Animate3 = (props : SvgProps) => {
    const radius = useSharedValue<number>(0);

    const handlePressCircle = () => {
        if(radius.value <=40){

            radius.value += 10;
        }
        console.log(radius.value)
    }

    const handlePressCircleDec = () => {
        if (radius.value >10){

            radius.value -= 10
        }
        console.log(radius.value)
    }

    const animatedPropsCircle = useAnimatedProps(()=>({
        r : withTiming(radius.value)
    }))
  return (
    <View className='items-center space-y-2'>
        <Text className='text-amber-300'>Animate 3 (Component Name)</Text>
        <Text className='text-sm'>useAnimateProps Hook -</Text>
        {/* trying out svg to render */}
        <View className='ring-2 ring-slate-200 bg-transparent w-48 h-48 rounded-full flex-col items-center gap-y-2'>
            {/* have a background on which svg can render or else it becomes difficult to identify */}
            {/* always mention w and h to make circle svg visible */}
            {/* <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
                <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
            </Svg> */}
            {/* <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <AnimatedCircle cx="50" cy="50"  fill="blue" animatedProps={animatedPropsCircle} />
            </Svg> */}

            <View className='w-40 h-40 bg-red-300 ring-2 ring-slate-200 rounded-full items-center justify-center'>
                <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <AnimatedCircle cx="50" cy="50" animatedProps={animatedPropsCircle} fill="blue" />
                </Svg>
            </View>

             <View>
                <Button text={"circle"} onPress={handlePressCircle} />
            </View>
            <View>
                <Button text={"circle D"} onPress={handlePressCircleDec} />
            </View>
            {/* last */}
        </View>
    </View>
  )
}

export default Animate3