import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';

const Tictactoe = () => {
    const [text, setCode] = useState('');
    return (
        <SafeAreaView style={styles.grid}>
            <Text style={{ fontSize: 30 }}>Tic Tac Toe</Text>
            <TextInput style={styles.input} placeholder="joincode" onChangeText={code => setCode(code)} defaultValue={text} />
            <Text>
                {text
                    .split(' ')
                    .map(word => word)
                    .join(' ')}
            </Text>
            <View style={styles.row}>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 1 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 2 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 3 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
            </View>
            <View style={styles.row}>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 4 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 5 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 6 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
            </View>
            <View style={styles.row}>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 7 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 8 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.cel} onPress={() => console.log('cel 9 pressed')}>
                    <Text style={{ color: '#fff' }} />
                </TouchableHighlight>
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
    cel: {
        color: '#fff',
        width: 100,
        height: 100,
        textAlign: 'center',
        lineHeight: 100,
        borderColor: '#fff',
        borderWidth: 2
    },
    grid: {
        alignItems: 'center',
        marginTop: 40,
        borderColor: '#000',
        borderWidth: 2,
        paddingBottom: 40,
        borderRadius: 35
    },
    input: {
        backgroundColor: '#0ff',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    }
});
