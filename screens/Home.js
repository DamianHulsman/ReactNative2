import React, {useState} from "react";
import { View, Text, Button, Image } from 'react-native';
import { Navigation } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const nav = useNavigation();
    
    return (
        <View style={{flex: 1, alignItems: "center"}}>
            <Image source={require('../assets/react-native-logo.png')} style={{width: 200, height: 200}}/>
            <Button onPress={() => nav.navigate('Main')} title="To main page"/>
            <Button onPress={() => nav.navigate('Tictactoe')} title="To Tic Tac Toe"/>
        </View>
    )
}

export default Home;