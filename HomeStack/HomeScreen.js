import { View, Text , TextInput, Dimensions, ImageBackground} from 'react-native'
import React , {useState, useEffect}from 'react'
import DialPad from '../components/DialPad'
import { colorTheme } from '../utils/palette'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/loginraedux/loginAction'
import {  useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const [textValue, setTextValue] = useState("")
  const navigation = useNavigation()
const dispatch = useDispatch()

const { lologinData } = useSelector(state => ({
  lologinData: state?.userDetails?.user
}));


useEffect(() => {

  if(lologinData?.status){
    navigation.navigate("ItemScreen")
    setTextValue("")
  }

  
},[lologinData])



  useEffect(() =>{

    if(textValue.length === 4){
      dispatch(loginUser(textValue))

      
    }


  },[textValue])


  return (
    <ImageBackground imageStyle={{resizeMode:"cover", width:Dimensions.get("window").width, height:Dimensions.get("window").height}}  source={require('../utils/images/bgmain.jpg')}>
  
    <View style={{padding:15, justifyContent:"center", height:Dimensions.get("window").height}}>
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)',shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9, padding:15, borderRadius:15, maxWidth:550 , margin:"auto", width:"100%" }}>


 <View style={{padding:20, borderRadius:10, marginBottom:20, borderWidth:1, borderColor:"#fff", alignItems:"center", height:80, justifyContent:"center"}}>
  <Text style={{fontSize:28, fontWeight:"500", color:"#fff"}}>{textValue}</Text>
 </View>
    
      
<DialPad displayValue={textValue} setValue={setTextValue}/>


      </View>
    </View></ImageBackground>
  )
}

export default HomeScreen