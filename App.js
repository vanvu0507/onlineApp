import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/Tabs'
import AuthContextProvider from './src/context/AuthContextProvider'
import CourseProviderContext from './src/context/CourseProviderContext'


const onlineApp = () => {
  return (
  <AuthContextProvider>
  <CourseProviderContext>
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
  </CourseProviderContext> 
  </AuthContextProvider> 
  )
}

export default onlineApp