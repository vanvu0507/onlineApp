import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { CourseContext } from '../context/CourseProviderContext';


const Search = ({navigation}) => {

  const [courses,setCourses] = useState([])

  const { course, setCourse } = useContext(CourseContext)

  // const [courseSearch, setCourseSearch] = useState([])

  const searchFilter = (text) => {
    axios.get(`http:192.168.1.56:3457/course/${text}`)
    .then(res => {
      setCourses(res.data.courses)
      console.log(res.data)
    }).catch(err => console.log(err))
    }    

  function searchBar() {
    return <View style={{
      backgroundColor: '#000080'
    }}>
      <TouchableOpacity style={{
        position: 'absolute',
        marginVertical: 20,
        marginLeft: 330,
        width: 50,
        zIndex: 1,
      }}
      >
      <Icon
      name='search'
      size={25}
      />
      </TouchableOpacity>        
      <TextInput
      style={{
        backgroundColor: 'white',
        borderRadius: 8,
        height: 40,
        width: 350,
        marginHorizontal: 12,
        marginVertical: 12,
        borderWidth: 1,
        position: 'relative'
      }}
      placeholder= 'Search something...'
      onChangeText={(text) => { searchFilter(text) }}
      />
      
    </View>
  } 

  return (
    <View>

      
    {searchBar()}

      <FlatList
      data={courses}
      keyExtractor={ (cours) => cours._id }
      renderItem={({item}) => {
        return <View style={{
          backgroundColor: 'white',
        }}>
          <TouchableOpacity
          onPress={() =>  {
            setCourse(item)
            console.log(course)
            navigation.navigate('DetailCourse')
          }}
          style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          
          }}
          >
          <Image
          source={{ uri: item.images[0].url }}
          style={{
            width: 30, 
            height: 30,
            marginLeft: 20,
            marginTop: 20
          }}
          />
          <Text style={{
            padding: 20,
            fontSize: 20,
            color: 'black'
          }}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      }}
      />

      <View style={{
        marginLeft: 30,
        marginVertical: 30
      }}>

        <Text style={{
          color: 'black',
           fontWeight: 'bold',
           fontSize: 20
        }}>Categories</Text>
        
        <ScrollView>
        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#ebc7ff',
          padding: 20,
          width: 330,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#ebc7ff',
          marginVertical: 5,
        }}>
          <Image
          source={require('../../assets/icons/programming-code-signs.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: '#eb87ff'
          }} 
          />
          <Text style={{
          color: '#eb87ff',
           fontWeight: 'bold',
           fontSize: 20,
           marginLeft: 20,
        }}>Development</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#a8f2ff',
          padding: 20,
          width: 330,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#a8f2ff',
          marginVertical: 5,
        }}>
          <Image
          source={require('../../assets/icons/briefcase.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: '#37edfa'
          }} 
          />
          <Text style={{
          color: '#37edfa',
           fontWeight: 'bold',
           fontSize: 20,
           marginLeft: 20,
        }}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#ff8000',
          padding: 20,
          width: 330,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#ff8000',
          marginVertical: 5,
        }}>
          <Image
          source={require('../../assets/icons/pencil-and-ruler.png')}
          style={{
            height: 20,
            width: 20,
          }} 
          />
          <Text style={{
          color: '#cc8033',
           fontWeight: 'bold',
           fontSize: 20,
           marginLeft: 20,
        }}>Design</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#ff6b6b',
          padding: 20,
          width: 330,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#ff6b6b',
          marginVertical: 5,
        }}>
          <Image
          source={require('../../assets/icons/income.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: '#ff0808'
          }} 
          />
          <Text style={{
          color: '#ff0808',
           fontWeight: 'bold',
           fontSize: 20,
           marginLeft: 20,
        }}>Finance</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})