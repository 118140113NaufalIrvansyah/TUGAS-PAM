import React from 'react'
import { View, Text , Button, Image } from 'react-native'
import {useSelector , useDispatch } from 'react-redux'
import Action from './action'
import Action2 from './action2'

const Car = () => {
    const data = useSelector(kondisi => kondisi.posisi )
    const dispatch = useDispatch() 
    return (
        <View>
        <Image
            source={{uri:"https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-car-car-traffic-cartoon-car-png-image_361579.jpg"}}
            style={{width:100, height:50, marginLeft:data}}
            />
        <View 
        style={{alignItems:'center'}}>
            <Button title="Mundur" color="blue" onPress={() => dispatch(Action())} />
            <Button title="Maju" color="red" onPress={() => dispatch(Action2())} />
        </View>
    </View>
    )
}

export default Car