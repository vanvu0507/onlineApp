import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'

const Login = ({navigation}) => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const {user, setUser} = useContext(AuthContext)

  // useEffect(() => {
  //  setUser([])
  //  console.log(user) 
  // },[])

  const onLoggedIn = async (id) => {
    console.log(id)
    await axios.get(`http:///192.168.1.10:3457/userinformation/${id}`).then(res => {
      if(res.status == 401) {
        console.log('lỗi 401')
      }
      if(res.status == 403) {
        console.log('lỗi 403')
      }
      if(res.status == 200){
      const user = res.data          
      setUser(user)       
      navigation.navigate('LoggedIn')    
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const loginButton = async() => {
    const payLoad = JSON.stringify({ username, password })
    console.log('username and pasword:  ',payLoad)
    await axios.post('http://192.168.1.10:3457/loginapp',payLoad, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status == 200 ) {
        const { user } = res.data
        onLoggedIn(user._id)
      } else {
        console.log('sai tên đăng nhập hoặc mật khẩu')
      }
    }).catch(err => {
      console.log(err)
    })
    setUsername('')
    setPassword('')
  }

  const onChangeUsername = (text) => {
    setUsername(text)
  }

  const onChangePassword = (text) => {
    setPassword(text)
  }

  const { input, textLabel } = styles
  return (
    <View>

      <Text style={{
        color: '#000080',
        fontWeight: 'bold',
        fontSize: 25
      }}>Login</Text>

      <View style={{
        alignItems: 'center',
        marginTop: 30,
      }}>

        <Text style={textLabel}>Username</Text>
        <TextInput
        style={input}
        value={username}
        onChangeText={(text) => { onChangeUsername(text)}}
        placeholder='Enter username'
        />

        <Text style={textLabel}>Password</Text>
        <TextInput
        style={input}
        value={password}
        onChangeText={(text) => { onChangePassword(text)}}
        placeholder='Enter password'
        secureTextEntry
        />

        <TouchableOpacity style={{
            marginBottom: 20,
            alignSelf: 'flex-end',
            marginRight: 50
        }}>
        <Text style={textLabel}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#000080',
          height: 40,
          width: 300,
          borderRadius: 5,
        }}
        onPress={loginButton}
        >
          <Text style={{
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            padding: 10
          }}>Login</Text>
        </TouchableOpacity>

        <Text style={{
            color: 'black',
            marginVertical: 10
        }}>Or login with</Text>

        <View style={{
            flexDirection: 'row',
        }}>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: '#1778F2',
                width: 140,
                borderRadius: 5,
                padding: 10,
                marginRight: 10
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: '#1778F2',
                    fontWeight: 'bold'
                }}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: '#DB4437',
                width: 140,
                borderRadius: 5,
                padding: 10,
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: '#DB4437',
                    fontWeight: 'bold',
                }}>Google</Text>
            </TouchableOpacity>
        </View>

      </View>

      <View style={{
        marginTop: 100,
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'black'
        }}>Do you have account?</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Register')}>
        <Text style={{
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10
        }}>Register Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

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