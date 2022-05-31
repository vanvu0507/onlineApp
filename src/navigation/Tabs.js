import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useContext} from 'react';

import Features from '../screen/Features';
import MyCourses from '../screen/MyCourses';
import WishList from '../screen/WishList';
import Account from '../screen/Account';
import Register from '../screen/Register';
import Login from '../screen/Login';
import LoggedIn from '../screen/LoggedIn';
import {AuthContext} from '../context/AuthContextProvider'
import DetailCourse from '../screen/DetailCourse';
import Search from '../screen/Search';
const Tab = createBottomTabNavigator();

const Tabs = () => {

  const { user } = useContext(AuthContext)
  
  return (
     <Tab.Navigator
       screenOptions={{
         tabBarShowLabel: false,
         tabBarStyle: {
           position: 'absolute',
           bottom: 20,
           left:20,
           right: 20,
           elevation: 0,
           backgroundColor: '#ffffff',
           borderRadius: 15,
           height: 90,
           ...styles.shadow
         }
       }}
    >
      <Tab.Screen
        name='Features'
        component={Features}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../../assets/icons/star.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }} />
              <Text
              style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
                FEATURED
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../../assets/icons/searching-magnifying-glass.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }} />
              <Text
              style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
                SEARCH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyCourses"
        component={MyCourses}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../../assets/icons/play-button.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }} />
              <Text
              style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
                MYCOURSE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../../assets/icons/heart.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }} />
              <Text
              style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
                WISHLIST
              </Text>
            </View>
          ),
        }}
      />

      { user.length == 0 ? (
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../../assets/icons/profile.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94',
              }} />
              <Text
              style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
                ACCOUNT
              </Text>
            </View>
          ),
        }}
      />
      ) : (
        <Tab.Screen
       name='LoggedIn'
       component={LoggedIn}
       options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image
            source={require('../../assets/icons/profile.png')}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94',
            }} />
            <Text
            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12,fontWeight: 'bold'}}>
              ACCOUNT
            </Text>
          </View>
        ),
      }}
       />
       )}

      <Tab.Screen
      name='Register'
      component={Register}
      options={{
        tabBarButton: () => null,
      }}
       />

      <Tab.Screen
      name='Login'
      component={Login}
      options={{
        tabBarButton: () => null,
      }}
       />

<Tab.Screen
      name='DetailCourse'
      component={DetailCourse}
      options={{
        tabBarButton: () => null,
      }}
       />
       
       
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Tabs
