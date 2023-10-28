import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text,TouchableOpacity,Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username and password.');
    } else {
      // Here you can perform the login logic, e.g., send a request to your server
      // For demonstration, navigate to the "Recording" screen on successful login
      navigation.navigate("Recording");
      // Alert the user about the successful login
      Alert.alert('Success', `Logged in with Username: ${username}`);
    }
  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Log In</Text>

      <Image source={require('../assets/v940-bb-ju-21.jpg')} style={styles.mic} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button}  onPress={handleLogin}>Login</TouchableOpacity>
      <TouchableOpacity style={styles.two} onPress={() => navigation.navigate("SignUp")} >Sign Up</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    width:390,
    backgroundColor:'black'
  },


  title: {
    color:'white',
    textAlign:'center',
    marginTop:-150,
    marginBottom:30,
    fontSize:40,
    fontWeight:700
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor:'white',
    borderRadius:15,
    width:280,
    alignSelf:'center'
  },

  button: {
    color:'white',
    borderWidth:1,
    borderColor:'white',
    height:35,
    width:120,
    textAlign:'center',
    paddingTop:5,
    alignSelf:'center',
    marginTop:20,
  },

  mic: {
    height:250,
    width:250,
    alignSelf:'center',
    marginBottom:50
  },

  two: {
    color:'white',
    textAlign:'center',
    marginTop:15,
  }
});

export default LoginScreen;
