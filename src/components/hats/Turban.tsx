import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'
import { Noop } from '../../utils/Noop'
import { Path, G } from 'react-native-svg'

// export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
export const Front = ({ color }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <G
      // TODO
      // it seems there is an issue with the scale when greater than 1
      // for now the scale will be hardcoded to 1
      transform={{ scale: 1, origin: 'center' }}
    >
      <Path
        d="M765.63,495.43s.3-2.94.8-8.24C759.75,345.82,643,233.25,500,233.25c-147.32,0-266.75,119.43-266.75,266.75,0,7.28.31,14.49.89,21.63,12.11-39.32,161.32-77.95,298.44-133.08C631.75,452.24,765.63,495.43,765.63,495.43Z"
        opacity={0.15}
      />
      <Path
        d="M747.94,163.66l0,0C684.65,74.76,266,93.83,204.16,155.69c-66.94,66.94,29.18,351,29.18,351,0-41.1,160.33-82.31,303.37-139.83,99.17,63.69,228.92,108.54,228.92,108.54S793.59,209.32,747.94,163.66Z"
        fill={base}
      />
      <Path
        d="M610.06,159.09c-36.6-4-184.31-1.44-322.45,25.65A481,481,0,0,0,235,197.59c-4.25,1.37-8.49,2.76-12.62,4.33s-8.24,3.18-12.18,5a112.44,112.44,0,0,0-11.34,5.93c-3.54,2.16-10.85,8.81-13.51,11.39l-7.3-15.56a69.81,69.81,0,0,1,12.33-9.59,116.58,116.58,0,0,1,13-6.93,217.66,217.66,0,0,1,26.74-10.11,460.64,460.64,0,0,1,54.55-12.9c18.3-3.27,36.69-5.71,55.1-7.7s35.8-7.94,54.26-8.88C494.59,148.61,592.19,154.62,610.06,159.09Z"
        fill={shadow}
      />
      <Path
        d="M188.17,320.14c3.47-1.42,6.8-2.75,10.2-4.07s6.78-2.61,10.18-3.87c6.79-2.57,13.62-5,20.45-7.36q20.52-7.09,41.26-13.47c6.91-2.14,13.82-4.25,20.78-6.22l10.42-3c3.47-1,6.94-2,10.44-2.93l20.94-5.59,21-5.25C382,261.7,484.59,232.18,513.37,230c-7,1.8-168.2,54.82-176.74,57.39L316,293.56q-20.57,6.22-41,12.91c-6.83,2.16-13.6,4.47-20.38,6.76s-13.54,4.65-20.3,7l-10.1,3.61q-5.07,1.77-10.08,3.64l-10,3.71c-3.32,1.23-6.69,2.52-9.9,3.78Z"
        fill={shadow}
      />
      <Path
        d="M711.7,270.48c-39.92,36.15-102.55,67-169.48,94.19l16.51,15.78h0S659.21,340.49,711.7,270.48Z"
        fill={shadow}
      />
      <Path
        d="M214.45,457.18a24.45,24.45,0,0,1,.66-5.43,27,27,0,0,1,1.75-4.9,36.8,36.8,0,0,1,5.26-8,72.69,72.69,0,0,1,13-11.7,206,206,0,0,1,28.63-16.72c19.57-9.69,39.67-17.6,59.8-25.27s40.4-14.82,60.64-22S424.76,349,445,341.87c40.42-14.25,79.8-31.3,119.21-47.95,9.86-4.14,93.82-54.66,102.72-60.67-8.32,6.8-67.53,50.51-99.82,67.22-39.1,18-78.43,35.84-118.64,50.95-20.13,7.5-40.29,14.87-60.43,22.25s-40.27,14.71-60.19,22.46c-10,3.88-19.86,7.85-29.66,12s-19.51,8.46-28.95,13.15A195.93,195.93,0,0,0,242.3,437a64.46,64.46,0,0,0-10.93,9.68c-3,3.49-7.94,11.25-7.92,14.53Z"
        fill={shadow}
      />
      <Path
        d="M747.94,163.66l0,0C684.65,74.76,266,93.83,204.16,155.69c-66.94,66.94,29.18,351,29.18,351,0-41.1,160.33-82.31,303.37-139.83,99.17,63.69,228.92,108.54,228.92,108.54S793.59,209.32,747.94,163.66Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M534.47,361.33c16.1-6.69,32.19-13.37,48.12-20.36l6-2.61,5.95-2.67,6-2.66,5.91-2.76,5.92-2.73c2-.91,3.92-1.88,5.88-2.81,3.91-1.89,7.83-3.75,11.69-5.74q23.34-11.6,45.56-25.15a427.09,427.09,0,0,0,43-29.7c-1.44,1.66-2.86,3.34-4.34,5s-2.9,3.33-4.49,4.84c-3.12,3.11-6.22,6.29-9.55,9.17-1.64,1.49-3.31,2.92-5,4.39s-3.41,2.8-5.12,4.21-3.45,2.76-5.2,4.11l-5.32,4A448.92,448.92,0,0,1,634.62,328c-3.84,2.18-7.74,4.23-11.63,6.29s-7.8,4.1-11.74,6.08l-5.9,3-6,2.87c-4,1.91-7.92,3.84-11.93,5.64q-24,11.06-48.52,20.65Z"
        fill={colors.outline}
      />
      <Path
        d="M769.08,431.09c-1.42-.23-2.71-.46-4-.72s-2.63-.53-3.94-.82c-2.62-.55-5.2-1.21-7.79-1.86q-7.74-2-15.34-4.43a315.52,315.52,0,0,1-29.83-11.2A306.66,306.66,0,0,1,679.61,398a208.59,208.59,0,0,1-26.43-17.56c2.42,1.09,4.82,2.19,7.19,3.35s4.7,2.34,7.12,3.39c4.77,2.18,9.47,4.49,14.28,6.55q14.25,6.56,28.91,12l7.33,2.71L725.4,411c4.94,1.65,9.9,3.22,14.89,4.67s10,2.83,15,4.13l3.77.91c1.26.32,2.52.62,3.78.89,2.5.57,5.08,1.14,7.49,1.59Z"
        fill={colors.outline}
      />
      <Path
        d="M615.36,160c-36.49-4.61-73.12-6.62-109.74-7.18s-73.25.43-109.73,3.15c-18.24,1.33-36.45,3.08-54.58,5.35s-36.18,5-54.06,8.36a484.87,484.87,0,0,0-52.83,12.84,211.12,211.12,0,0,0-25,9.44A113.77,113.77,0,0,0,197.84,198a56.05,56.05,0,0,0-9.85,7.45L179.5,197a67.76,67.76,0,0,1,12-9.28,115.9,115.9,0,0,1,12.81-6.8,226.14,226.14,0,0,1,26.49-10A457.87,457.87,0,0,1,285.08,158c36.5-6.53,73.31-10.19,110.17-12.17a1068.52,1068.52,0,0,1,110.62-.17c9.2.53,18.4,1.16,27.59,1.94s18.35,1.78,27.49,2.93A542.75,542.75,0,0,1,615.36,160Z"
        fill={colors.outline}
      />
      <Path
        d="M210.05,449.36a24.5,24.5,0,0,1,.64-5.37,26.93,26.93,0,0,1,1.71-4.87,36.36,36.36,0,0,1,5.18-8,71.43,71.43,0,0,1,12.89-11.68,202.41,202.41,0,0,1,28.39-16.69c19.41-9.65,39.35-17.52,59.32-25.14s40.08-14.74,60.17-21.86,40.21-14,60.25-21.15c40.11-14.17,80-28.92,119.07-45.49q14.67-6.18,29.14-12.83t28.69-13.79q14.22-7.17,28-15.08t27.08-16.87c-8.25,6.75-16.94,13-25.81,18.91s-18,11.55-27.24,16.89S598.9,276.71,589.4,281.6s-19.15,9.51-28.82,14c-38.79,18-78.6,33.46-118.5,48.49-20,7.46-40,14.78-59.95,22.12s-39.95,14.62-59.72,22.33c-9.87,3.85-19.7,7.81-29.41,11.95s-19.35,8.41-28.71,13.08a191.39,191.39,0,0,0-26.63,15.63,63.16,63.16,0,0,0-10.78,9.64c-3,3.47-4.85,7.2-4.83,10.48Z"
        fill={colors.outline}
      />
      <Path
        d="M184.48,311.25C198,305.7,211.57,300.86,225.22,296s27.38-9.26,41.18-13.53c27.6-8.52,55.41-16.36,83.45-23.23S406,246,434.45,240.93L445.09,239l5.33-1,5.34-.85L477.15,234c7.13-1.1,14.3-1.92,21.46-2.74s14.33-1.6,21.5-2.31q-10.54,2.44-21.09,4.73c-7,1.55-14.09,2.94-21.08,4.63-14,3.22-28.07,6.22-42,9.66q-42,9.66-83.48,21.17l-20.73,5.79L311.07,281c-13.74,4.12-27.44,8.36-41.07,12.81-6.84,2.15-13.63,4.46-20.42,6.74s-13.57,4.62-20.35,6.94c-13.48,4.75-27,9.69-40.19,14.83Z"
        fill={colors.outline}
      />
    </G>
  )
}

export const Back = Noop