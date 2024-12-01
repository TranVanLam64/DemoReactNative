import React from 'react'
import { Text, View } from 'react-native'
import Svg, { Circle } from "react-native-svg"
import styles from './styles'

interface ProgressRingProps {
    size: number,
    strokeWidth: number,
    progress: number
}

const ProgressRing = ({ size, strokeWidth, progress }: ProgressRingProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <View>
        <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#56698F"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4ABF40"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            rotation={-90}
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <Text
          style={[
            styles.progressText,
            {
              top: size / 2 - 8,
              left: size / 2 - 14.5,
            },
          ]}
        >{`${progress} %`}</Text>
      </View>
    )
}

export default ProgressRing
