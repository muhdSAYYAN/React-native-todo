import { View, Text,StyleSheet, TouchableOpacity, KeyboardAvoidingViewComponent, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
           <View style={styles.square}></View>
       
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
    <View style={styles.circular}></View>

    </View>
  )
}

export default Task

const styles  = StyleSheet.create({
    item:{
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        backgroundColor:"#FDD9",
        borderRadius:10,
        textDecorationColor:"black"


    },
    itemLeft:{
        flexDirection:'row',
        alignItems:"center",
        flexWrap:"wrap"
    },
    square:{
       width:24,
       height:24,
       backgroundColor:"aqua" ,
       opacity:0.4,
       borderRadius:5,
       marginRight:15
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        width:15,
        height:15,
        borderColor:"gray",
        borderWidth:2,
        borderRadius:5
    },

})