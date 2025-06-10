import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    text? : string;
    onPress? : () => void;
}

const Button = ({text, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity className='w-40 bg-red-300 p-5 items-center justify-center rounded-full  ' onPress={onPress} >
        <Text>{text ? text : "hello" }</Text>
    </TouchableOpacity>
  )
}

export default Button