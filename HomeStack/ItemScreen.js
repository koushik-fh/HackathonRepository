import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React , {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../redux/loginraedux/loginAction';
import { placeOrder } from '../redux/loginraedux/loginAction';
import {  useNavigation } from '@react-navigation/native';


const ItemScreen = () => {

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const { menuData, lologinData , orderData} = useSelector(state => ({
    menuData: state?.userDetails?.menuData,
    lologinData: state?.userDetails?.user,
    orderData:state?.userDetails?.orderData
  }));


  useEffect(() =>{

    if(orderData.status){
      navigation.navigate("BillingScreen", {data:orderData})

    }


  },[orderData])


  console.log(orderData, "ndueh")

  useEffect(() =>{

    dispatch(getMenu())

  },[])

  const handlePalceOrder = (item) =>{



    dispatch(placeOrder(lologinData?.user?.id, item?.menu_id, item.id ))

    // console.log(id ,lologinData, "heloo")
  }

  const renderCard = ({item}) =>{
    return (
      <View style={{backgroundColor:"#fff", padding:15, borderRadius:20, marginVertical:15, marginHorizontal:15}}>
        <View style={{marginBottom:15}}>
          <Image style={{width:330, height:230, resizeMode:"cover", borderRadius:20}} source={{uri:item?.img}}/>
       </View>
        <View style={{marginBottom:15, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:25, fontWeight:"500", textTransform:"capitalize"}}>{item?.title}</Text>
        </View>
    <TouchableOpacity onPress={() => handlePalceOrder(item)} style={{backgroundColor:"#C40C0C", padding:10, borderRadius:10, flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
    <Text style={{fontSize:25, color:"#fff", fontWeight:"500", textTransform:"capitalize", marginLeft:10}}>order now </Text></TouchableOpacity>
       </View>
    )
  }
  return (
    <View >
    
    {menuData?.length > 0  ?
    
    <FlatList 
    scrollEnabled={true}
    contentContainerStyle={{height:800, padding:20, justifyContent:"center", alignItems:"center"}}
   renderItem={renderCard}
   numColumns={3}
  data={menuData}
  key={(item) => item?.id}/> : <Text>No menu available</Text>
  }


    </View>
  )
}

export default ItemScreen