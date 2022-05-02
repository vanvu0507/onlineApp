import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React,  {useContext, useEffect, useState} from 'react'
import { CourseContext } from '../context/CourseProviderContext'
import YoutubePlayer from 'react-native-youtube-iframe'

const DetailCourse = () => {
  
  const { course } = useContext(CourseContext)

  
  useEffect(() => {
    console.log(course)
  })

  return (
    <View style={{
      backgroundColor: 'white'
    }}>
      <YoutubePlayer
      height={250} 
      play={true}
      videoId={`${course.video.slice(30)}`} 
      />

    <Text style={{
      fontWeight: 'bold',
      fontSize: 20,
      color: '#000080',
      marginLeft: 20,
    }}>{course.title}</Text>

    <View style={{
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <Text style={{
        fontWeight: 'bold'
      }}>by StudyCamp</Text>

      <TouchableOpacity style={{
        borderWidth: 1,
        borderRadius: 15,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Text>Note</Text>
        <Image
        source={require('../../assets/icons/notes.png')}
        style={{
          width: 15,
          height: 15,
        }}
        />
      </TouchableOpacity>
    </View>


      <Text style={{
        fontWeight: 'bold',
        color: '#000080',
        fontSize: 20,
        marginLeft: 20,
      }}>Thông tin khóa học</Text>

    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <View>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10
      }}>Thời gian</Text>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10
      }}>Số bài tập</Text>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10
      }}>Dành cho bạn</Text>
      </View>
      <View>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10,
        fontWeight: 'bold',
      }}>{course.duration}</Text>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10,
        fontWeight: 'bold',
      }}>{course.section}</Text>
        <Text style={{
        color: 'black',
        fontSize: 15,
        paddingVertical: 10,
        fontWeight: 'bold',
      }}>Giấy chứng nhận</Text>
      </View>
    </View>

    <Text style={{
        fontWeight: 'bold',
        color: '#000080',
        fontSize: 20,
        marginLeft: 20,
      }}>Đánh giá</Text>
      
      <FlatList
      data={course.reviews}
      keyExtractor={(review) => review._id}
      renderItem={({item}) => {
        return <View style={{
          borderWidth: 1,
          width: 350,
          alignSelf: 'center',
          marginBottom: 10,
          marginHorizontal: 10
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
          }}>Rating {item.rating}/5 &#11088; </Text>
          <Text>Thành viên: {item.author.username}</Text>
          <Text>{item.body}</Text>
        </View>
      }}
      horizontal
      />

    </View>
  )
}

export default DetailCourse

const styles = StyleSheet.create({})