import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {  useNavigation } from '@react-navigation/native';
import HomeScreen from '../HomeStack/HomeScreen';
import { colorTheme } from '../utils/palette';
import BillingScreen from '../HomeStack/BillingScreen';
import ItemScreen from '../HomeStack/ItemScreen';
import { Feather } from '@expo/vector-icons';



const Stack = createStackNavigator();

const NavigationStack = () => {

  const navigation = useNavigation()


  const handleLogout = () =>{

    navigation.navigate("DadhBoard")
  }
  const renderHeaderRight = () =>{

    return(
      <TouchableOpacity onPress={handleLogout} style={{marginRight:20, flexDirection:"row", alignItems:"center"}}>
<Feather name="log-out" size={24} color="black" />     <Text style={{marginLeft:10}}>Log Out</Text>
      </TouchableOpacity>
    
    )
  }
  return (
 
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:colorTheme.themeBg},}}>
    <Stack.Screen name="DashBoard" options={{ headerShown:false}} component={HomeScreen} ></Stack.Screen>
    <Stack.Screen name="ItemScreen" options={{headerRight:() => renderHeaderRight(), headerTitle:"Select Menu"}} component={ItemScreen}  ></Stack.Screen>

    <Stack.Screen name="BillingScreen" options={{ headerShown:false}}  component={BillingScreen} ></Stack.Screen>

   
    </Stack.Navigator>

  )
}

export default NavigationStack