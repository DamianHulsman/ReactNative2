import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';


const Tictactoe = () => {


    return (
        <SafeAreaView style={{ alignItems: 'center', marginTop: 40 }}>
            <Text style={{ fontSize: 30 }}>Tic Tac Toe</Text>
            <View style={styles.row}>
                <Text style={styles.cel}>1</Text>
                <Text style={styles.cel}>2</Text>
                <Text style={styles.cel}>3</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.cel}>4</Text>
                <Text style={styles.cel}>5</Text>
                <Text style={styles.cel}>6</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.cel}>7</Text>
                <Text style={styles.cel}>8</Text>
                <Text style={styles.cel}>9</Text>
            </View>
        </SafeAreaView>
    )

}

export default Tictactoe;

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        alignItems: 'center',
    },
    cel: { color: '#fff', 
    width: 100, 
    height: 100, 
    textAlign: 'center', 
    lineHeight: 100, 
    borderColor: '#fff', 
    borderWidth: 2 
    }
});
