import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react'

export const CourseContext = createContext()

const CourseProviderContext = ({children}) => {

  const [course,setCourse] = useState([])
   
  return (
    <CourseContext.Provider value={{ course, setCourse }}>
        {children}
    </CourseContext.Provider>
  )
}

export default CourseProviderContext