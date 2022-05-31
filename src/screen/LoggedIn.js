import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'

const LoggedIn = ({navigation}) => {

  const [userInfo,setUserInfo] = useState([])
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    setUserInfo(user)
  },[])

  const logout = () => {
    axios.post('http:192.168.1.56:3457/logoutapp').then(res =>  {
      if(res.status == 200){
      setUser([])
      navigation.navigate('Account')
    }      
    }).catch(err => {
      console.log(err)
    })
  }
  

  function Header() {
    
    return(
      <View>
        <View style={{
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 10
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            width: 200
          }}>Account</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/setting.png')}
            style={{
              width: 25,
              height: 25
            }}
             />
          </TouchableOpacity>
        </View>

        <View style={{
          borderBottomWidth: 1,
          borderColor: '#D3D3D3'
        }}>
          <View style={{
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/icons/man.png')}
          style={{
            width: 50,
            height: 50,
          }}
          />
          <Text style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            marginVertical: 10
          }}>{user.username}</Text>
          <Text style={{
            backgroundColor: '#FFD700',
            width: 50,
            color: 'white',
            textAlign: 'center',
            borderRadius: 8,
            paddingVertical: 5
          }}>VIP</Text>
          </View>

          <View style={{
            paddingVertical: 30,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>

          <View style={{
              alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: '#87CEFA',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image source={require('../../assets/icons/mortarboard.png')}
             style={{
              width: 25,
              height: 25,
              tintColor: '#1E90FF',
            }}
             />
             </View>
             <Text style={{
               color: 'black',
               fontWeight: 'bold'
             }}>120 HOURS</Text>
             <Text style={{
               fontWeight: 'bold'
             }}> Study time</Text>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
            <View style={{
              backgroundColor: '#FF8886',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image source={require('../../assets/icons/online-course.png')}
             style={{
              width: 25,
              height: 25,
              tintColor: '#FF1D18'
            }}
             />
            </View>
            <Text style={{
               color: 'black',
               fontWeight: 'bold'
             }}>32 COURSES</Text>
             <Text style={{
               fontWeight: 'bold'
             }}>Learned</Text>
            </View>

          </View>
        </View>

        <View style={{
          alignItems: 'center'
        }}>
          <Text style={{
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginLeft: 20,
            paddingVertical: 20
          }}>ACCOUNT</Text>

          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#D3D3D3',
            width: 350,
            marginVertical: 5
          }}>
            <Image source={require('../../assets/icons/house-key.png')}
            style={{
              width: 20,
              height: 20,
              marginVertical: 20
            }}
             />
            <Text style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 15,
              marginVertical: 20
            }}>Change password</Text>
            <Text style={{
              marginVertical: 20
            }}>></Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#D3D3D3',
            width: 350,
            marginVertical: 5
          }}
          onPress={logout}
          >
            <Image source={require('../../assets/icons/log-out.png')}
            style={{
              width: 20,
              height: 20,
              marginVertical: 20
            }}
             />
            <Text style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 17,
              marginVertical: 20
            }}>Logout account</Text>
            <Text style={{
              marginVertical: 20
            }}>></Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }

  return (
    <View>

      {Header()}

      {/* {middle()} */}

      {/* {footer()} */}

    </View>
  )
}

export default LoggedIn

const styles = StyleSheet.create({})