import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  const { input, textLabel } = styles
  return (
    <View>

      <Text style={{
        color: '#000080',
        fontWeight: 'bold',
        fontSize: 25
      }}>Register New Account</Text>

      <View style={{
        alignItems: 'center',
        marginTop: 30,
      }}>

        <Text style={textLabel}>Email</Text>
        <TextInput
        style={input}
        placeholder='Email address'
        />

        <Text style={textLabel}>Username</Text>
        <TextInput
        style={input}
        placeholder='Enter username'
        />

        <Text style={textLabel}>Password</Text>
        <TextInput
        style={input}
        placeholder='Enter password'
        secureTextEntry
        />

        <TouchableOpacity style={{
          backgroundColor: '#000080',
          height: 40,
          width: 300,
          borderRadius: 5,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            padding: 10
          }}>Register</Text>
        </TouchableOpacity>

      </View>

      <View style={{
        marginTop: 100,
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'black'
        }}>Already have account?</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text style={{
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10
        }}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20
  },
  textLabel: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 50,
  }
})