import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';


const BillingScreen = () => {

  const [orderitem, setOrderItem] = useState([])

  const {  orderData} = useSelector(state => ({

    orderData:state?.userDetails?.orderData
  }));


  useEffect(()=>{

console.log(orderData, "xeiji")
if(orderData.status){
  setOrderItem(orderData?.orders)

}

  },[orderData])



  return (
    <View style={{padding:20, height:Dimensions.get("window").height, justifyContent:"center"}}>

      <View style={{backgroundColor:"white", maxWidth:600, padding:20, borderRadius:20, shadowColor: '#cccc',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 8.46,
    elevation: 10,margin:"auto", width:"100%"}}>

      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>

      <Text style={{fontSize:35, fontWeight:"500", marginBottom:5}}>#{orderitem?.token}</Text>

      <Text style={{fontWeight:"300", fontSize:16, color:"#000"}}> 26/04/2024 </Text>

      </View>

         
     

         <View style={billingStyles.listContentStyle}>
     
          
         <Text style={{fontWeight:"500", fontSize:15}} >{orderitem?.code}</Text>  <Text style={{fontWeight:"500", fontSize:15}}>  -  {orderitem?.name}</Text>
         </View>
      
         <View style={billingStyles.listContentStyle}>
         <Text style={{fontWeight:"500", fontSize:15}}>Department : </Text>
         <Text>{orderitem?.dept}</Text>
         </View>
         <View style={billingStyles.listContentStyle}>
         <Text style={{fontWeight:"500", fontSize:15}} >{orderitem?.item} </Text>
          <View style={{flexDirection:"row"}}>
      
         <Text> <Text style={{color:"#A9A9A9"}}>qty :</Text>  1</Text>
          </View>
           
         </View>
         <View style={{backgroundColor:"#dff5ff", padding:10, borderRadius: 10, justifyContent:"center", alignItems:"center", marginTop:20}}>
          <Text style={{textTransform:"capitalize", fontSize:14, color:"#000"}}> don't waste food at any cost</Text>
         </View>
     

      </View>
      


    </View>
  )
}


const billingStyles = StyleSheet.create({

  listContentStyle:{
    flexDirection:"row",
    paddingVertical:8,
    borderBottomWidth:1,
    borderBottomColor:"#cccc"
  },

  titleText:{
    fontWeight:"500"
  }

  
})

export default BillingScreen