import React from 'react'
import { useTheme } from '../../themeContext'
import { Path } from 'react-native-svg'

export const GraphQLGraphic = () => {
  const { colors } = useTheme()

  return (
    <>
      <Path
        d="M551.55,939.73a11.33,11.33,0,0,0-3-1.2V907.92a11.25,11.25,0,0,0,3.06-1.22,11.49,11.49,0,1,0-14.08-17.84L511,873.57a11.48,11.48,0,1,0-22.48-3.28,11.68,11.68,0,0,0,.47,3.26l-26.5,15.3a11.65,11.65,0,0,0-2.59-2.05,11.49,11.49,0,1,0-11.48,19.9,11.25,11.25,0,0,0,3.06,1.22v30.6a11.71,11.71,0,0,0-3,1.21,11.49,11.49,0,1,0,11.48,19.9,11.65,11.65,0,0,0,2.57-2L489,972.9a11.25,11.25,0,0,0-.47,3.25,11.48,11.48,0,1,0,23,0,11.68,11.68,0,0,0-.58-3.62l26.33-15.2a11.24,11.24,0,0,0,2.84,2.3,11.49,11.49,0,0,0,11.48-19.9ZM465.35,947a11.36,11.36,0,0,0-1.21-3,11.59,11.59,0,0,0-2-2.56l34.68-60.06a11.67,11.67,0,0,0,3.2.45,11.37,11.37,0,0,0,3.21-.46l34.67,60.06a11.45,11.45,0,0,0-3.23,5.6Zm69.45-53.36a11.46,11.46,0,0,0,8.26,14.28v30.65l-.44.11-34.68-60.07.3-.3Zm-43.06-15.34.33.32-34.68,60.07-.45-.12V907.89a11.45,11.45,0,0,0,8.25-14.29Zm16.75,90.14a11.5,11.5,0,0,0-16.76-.23l-26.51-15.31.12-.44h69.32c.06.25.13.51.21.75Z"
        stroke={colors.white}
        strokeWidth="16px"
      />
      <Path
        d="M551.55,939.73a11.33,11.33,0,0,0-3-1.2V907.92a11.25,11.25,0,0,0,3.06-1.22,11.49,11.49,0,1,0-14.08-17.84L511,873.57a11.48,11.48,0,1,0-22.48-3.28,11.68,11.68,0,0,0,.47,3.26l-26.5,15.3a11.65,11.65,0,0,0-2.59-2.05,11.49,11.49,0,1,0-11.48,19.9,11.25,11.25,0,0,0,3.06,1.22v30.6a11.71,11.71,0,0,0-3,1.21,11.49,11.49,0,1,0,11.48,19.9,11.65,11.65,0,0,0,2.57-2L489,972.9a11.25,11.25,0,0,0-.47,3.25,11.48,11.48,0,1,0,23,0,11.68,11.68,0,0,0-.58-3.62l26.33-15.2a11.24,11.24,0,0,0,2.84,2.3,11.49,11.49,0,0,0,11.48-19.9ZM465.35,947a11.36,11.36,0,0,0-1.21-3,11.59,11.59,0,0,0-2-2.56l34.68-60.06a11.67,11.67,0,0,0,3.2.45,11.37,11.37,0,0,0,3.21-.46l34.67,60.06a11.45,11.45,0,0,0-3.23,5.6Zm69.45-53.36a11.46,11.46,0,0,0,8.26,14.28v30.65l-.44.11-34.68-60.07.3-.3Zm-43.06-15.34.33.32-34.68,60.07-.45-.12V907.89a11.45,11.45,0,0,0,8.25-14.29Zm16.75,90.14a11.5,11.5,0,0,0-16.76-.23l-26.51-15.31.12-.44h69.32c.06.25.13.51.21.75Z"
        fill="#e535ab"
      />
    </>
  )
}