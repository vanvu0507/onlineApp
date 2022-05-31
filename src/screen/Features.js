import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Image, Sea } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { CourseContext } from '../context/CourseProviderContext';
import { AuthContext } from '../context/AuthContextProvider'
import axios from 'axios';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';

const Features = ({navigation}) => {

  const { user } = useContext(AuthContext)

  const [devCourses,setCourses] = useState([])
  const [recommendCourses,setRecommendCourses] = useState([])
  const [featureCourses, setFeatureCourses] = useState([])
  const [shortCourses, setshortCourses] = useState([])
  const [reload,setReload] = useState([])

  useEffect(() => {
    axios.get('http:192.168.1.56:3457/json/courses')
    .then( async(response) => {
        const courses = response.data.slice(0,5)
        const recommendCourses = response.data.slice(5,10)
        const featureCourses = response.data.slice(10,15)
        const shortCourses = response.data.slice(15,20)
        const reload = response.data

        setCourses(courses)
        setRecommendCourses(recommendCourses)
        setFeatureCourses(featureCourses)
        setshortCourses(shortCourses)
        setReload(reload)
    })
    .catch(err => {
      console.log(err)
    })
  },[reload])

  const { course, setCourse } = useContext(CourseContext)
  
  function headerTab() {
    const {headerTabContainer, input} = styles
    return (
      <View
      style={headerTabContainer}
      >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: 'white',
          marginLeft: 20,
        }}>Hello {user.username}</Text>
        
        <Text style={{
          marginLeft: 20,
          color: 'white'
        }}>choose course that you want to learn</Text>
        
        <TextInput
        style={input}
        placeholder= "Search here"
        />
      </View>
    )
  }

  function featureTab() {
    const {spaceAround, highlightText, thumbnails} = styles

    return(
      <View>

       <View style={spaceAround}>

        <Text style={highlightText}>Featured</Text>

        <TouchableOpacity>
          <Text style={{
            color: '#000080',
            fontSize: 17
          }}>See all > </Text>
        </TouchableOpacity>

        </View>

        <FlatList
        data={featureCourses}
        keyExtractor={ (course) => course._id }
        renderItem={({item}) => {
          return <View 
          style={{
            width: 200,
            marginLeft: 10,
            marginRight: 10,
          }}>
            <TouchableOpacity
            onPress={() =>  {
              setCourse(item)
              console.log(course)
              navigation.navigate('DetailCourse')
            }}
            >
            <Image 
            style={thumbnails} 
            source={{ uri: item.images[0].url }} /></TouchableOpacity>
            <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17
            }}
            >{item.title}</Text>
            <Text>Study Camp</Text>
          </View>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
         />

      </View>
    )
  }

  function categoryTab() {
    const { buttonCategory, textCategory, spaceAround, highlightText} = styles
    return (
      <View style={{
      marginBottom: 20
      }}>
        <View style={spaceAround}>

        <Text style={highlightText}>Categories</Text>

        <TouchableOpacity>
          <Text style={{
            color: '#000080',
            fontSize: 17
          }}>See all > </Text>
        </TouchableOpacity>

        </View>

        <View style={{

        }}>
        <ScrollView style={{
          marginLeft: 30,
        }}
        horizontal
        showsHorizontalScrollIndicator= {false}>

 
            <TouchableOpacity style={buttonCategory}>
              <Text style={textCategory}>ALL COURSE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttonCategory}>
              <Text style={textCategory}>DESIGN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttonCategory}>
              <Text style={textCategory}>FINANCE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttonCategory}>
              <Text style={textCategory}>DEVELOPMENT</Text>
            </TouchableOpacity>

        </ScrollView>

        </View>

      </View>
    )
  }

  function topCourseTab() {
    const {spaceAround, highlightText, thumbnails} = styles
    return(
      <View>

       <View style={spaceAround}>

        <Text style={highlightText}>Top Courses in Development</Text>

        <TouchableOpacity>
          <Text style={{
            color: '#000080',
            fontSize: 17
          }}>See all > </Text>
        </TouchableOpacity>

        </View>

        <FlatList
        data={devCourses}
        keyExtractor={ (course) => course._id }
        renderItem={({item}) => {
          return <View 
          style={{
            width: 200,
            marginLeft: 10,
            marginRight: 10,
          }}>
            <TouchableOpacity
             onPress={() =>  {
              setCourse(item)
              console.log(course)
              navigation.navigate('DetailCourse')
            }}
            >
            <Image 
            style={thumbnails} 
            source={{ uri: item.images[0].url }} /></TouchableOpacity>
            <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17
            }}
            >{item.title}</Text>
            <Text>Study Camp</Text>
          </View>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
         />

      </View>
    )
  }

  function recommentTab() {
    const {spaceAround, highlightText, thumbnails} = styles

    return(
      <View>

       <View style={spaceAround}>

        <Text style={highlightText}>Recommmend course for you</Text>

        <TouchableOpacity>
          <Text style={{
            color: '#000080',
            fontSize: 17
          }}>See all > </Text>
        </TouchableOpacity>

        </View>

        <FlatList
        data={recommendCourses}
        keyExtractor={ (course) => course._id }
        renderItem={({item}) => {
          return <View 
          style={{
            width: 200,
            marginLeft: 10,
            marginRight: 10,
          }}>
            <TouchableOpacity
             onPress={() =>  {
              setCourse(item)
              console.log(course)
              navigation.navigate('DetailCourse')
            }}
            >
            <Image 
            style={thumbnails} 
            source={{ uri: item.images[0].url }} /></TouchableOpacity>
            <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17
            }}
            >{item.title}</Text>
            <Text>Study Camp</Text>
          </View>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
         />

      </View>
    )
  }

  function shortTab() {
    const {spaceAround, highlightText, thumbnails} = styles

    return(
      <View>

       <View style={spaceAround}>

        <Text style={highlightText}>Short and sweet course for you</Text>

        <TouchableOpacity>
          <Text style={{
            color: '#000080',
            fontSize: 17
          }}>See all > </Text>
        </TouchableOpacity>

        </View>

        <FlatList
        data={shortCourses}
        keyExtractor={ (course) => course._id }
        renderItem={({item}) => {
          return <View 
          style={{
            width: 200,
            marginLeft: 10,
            marginRight: 10,
          }}>
            <TouchableOpacity
             onPress={() =>  {
              setCourse(item)
              console.log(course)
              navigation.navigate('DetailCourse')
            }}
            >
            <Image 
            style={thumbnails} 
            source={{ uri: item.images[0].url }} /></TouchableOpacity>
            <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17
            }}
            >{item.title}</Text>
            <Text>Study Camp</Text>
          </View>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
         />

      </View>
    )
  }

  return (
    <View style={{
      backgroundColor: 'white'
    }}>
      <ScrollView>
      {headerTab()}

      {featureTab()}


      {categoryTab()}

      {topCourseTab()}

      {recommentTab()}

      {shortTab()}
      
      </ScrollView>
    </View>
  )
}

export default Features

const styles = StyleSheet.create({
  headerTabContainer: {
    backgroundColor: '#000080',
    height: 100,
    // justifyContent: 'center',
    color: 'red'
  },
textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
},
highlightText: {
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black',
  width: 200
},
spaceAround: {
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-around',
  padding: 10
},
input: {
  backgroundColor: 'white',
  borderRadius: 8,
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  // marginBottom: 25
},
buttonCategory: {
  borderWidth: 1,
  borderColor: '#C0C0C0',
  borderRadius: 8,
  padding: 10,
  marginLeft: 10,
  marginRight: 10,
},
textCategory: {
  color: '#000080',
  fontWeight: 'bold',
  fontSize: 16
},
thumbnails: {
  width: 200,
  height: 150,
  borderRadius: 8
}
})