import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Image, Button, Input } from 'react-native-elements'
import { auth } from '../firebase'

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
             if(authUser) {
                 navigation.replace("Home");
             }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={{
                uri: 
                "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",

                }}
                style={{ width: 200, height: 200}} 
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password" 
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button title="Login" onPress={signIn} containerStyle={styles.button}/>
            <Button title="Register" onPress={() => navigation.navigate("Register")} type="outline"  containerStyle={styles.button}/>
            <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
