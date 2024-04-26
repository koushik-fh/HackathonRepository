import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React, {useCallback} from 'react'
import { dialPadConstants } from '../utils/AppConstants'
import { colorTheme } from '../utils/palette'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const DialPad = ({displayValue, setValue}) => {
    const handleValueChange = (value) => {

        if(value === "DELETE"){
            setValue(prevValue => prevValue.slice(0, -1));
        }else if ( value === "CLEAR"){
            setValue("");
        }else{

            if(displayValue.length < 4){
                setValue(prevValue =>   prevValue + value)
            }
        }

      


    }

 const renderDials = ({item}) =>{
return (
        <TouchableOpacity onPress={() =>handleValueChange(item.value)} style={{borderWidth:2, marginVertical:15, marginHorizontal:15, borderColor:"#fff", padding:15, borderRadius:10, width:80 , height:80, justifyContent:"center", alignItems:"center"}}>
            
            {
                item.value === "DELETE" ?

                <Feather name="delete" size={24} color="#fff" /> :

                item.value === "CLEAR" ?
                <MaterialIcons name="delete-outline" size={24} color="#fff" /> :
                <Text style={{fontSize:25, fontWeight:"500", color:"#fff"}}> {item.text}</Text>

            }
          
        
           </TouchableOpacity>
    )
 }

  return (
    <View>
    
    <FlatList contentContainerStyle={{flexDirection:"row", margin:"auto" ,flexWrap:"wrap", alignItems:"center", justifyContent:"center", maxWidth:380}} data={dialPadConstants} key={(item) => item?.value} renderItem={renderDials}/>

    </View>
  )
}

export default DialPad