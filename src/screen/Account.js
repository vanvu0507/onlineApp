import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'

const Account = ({ navigation }) => {

  const { headingText } = styles

  const  { user } = useContext(AuthContext)

  return (
    <View>
      <Text style={headingText}>STUDY CAMP</Text>
      <View style={{
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginBottom: 10,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20
        }}>Welcome,</Text>
        <Text style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginBottom: 25,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15
        }}>Login to continue</Text>
        <TouchableOpacity style={{
          backgroundColor: '#000080',
          paddingVertical: 10,
          width: 350,
          borderRadius: 8
        }}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={{
           color: 'white',
           fontWeight: 'bold',
           alignSelf: 'center'
          }}>Login</Text>
        </TouchableOpacity>
        <Text style={{
          marginTop: 10,
          marginBottom: 10
        }}>Or</Text>
        <TouchableOpacity style={{
          paddingVertical: 10,
          width: 350,
          borderWidth: 1,
          borderTopColor: '#000080',
          borderRadius: 8
        }}
        onPress={() => navigation.navigate('Register')}
        >
          <Text style={{
           color: '#000080',
           fontWeight: 'bold',
           alignSelf: 'center'
          }}>Register</Text>
        </TouchableOpacity>

        <Text>By creating new account, you agree to our</Text>
        <Text>Terms of Services & Privacy Policy</Text>

      </View>

    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  headingText: {
    color: '#000080',
    fontWeight: 'bold',
    fontSize: 25
  },
  container: {
    flex: 1,
    paddingTop: 200,
  },
})