import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    text? : string;
    onPress? : () => void;
    width? : number;
}

const Button = ({text, onPress ,width}:ButtonProps) => {
  return (
    <TouchableOpacity className={`w-40 bg-red-300 p-5 items-center justify-center rounded-full`} onPress={onPress} >
        <Text>{text ? text : "hello" }</Text>
    </TouchableOpacity>
  )
}

export default Button

/*
  `w-${width} -- dynamic width and interpolated classes are not possible in native wind`
*/