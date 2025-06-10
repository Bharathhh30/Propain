import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    text? : string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <TouchableOpacity className='w-40 bg-red-300 p-5 items-center justify-center rounded-full m-4 '>
        <Text>{text ? text : "hello" }</Text>
    </TouchableOpacity>
  )
}

export default Button