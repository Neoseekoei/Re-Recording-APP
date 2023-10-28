import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,TouchableOpacity,Image,Text } from 'react-native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (username === '' || email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {

        navigation.navigate("Recording");
      // Here you can perform the signup logic, e.g., send a request to your server
      Alert.alert('Success', `Signed up with Username: ${username}, Email: ${email}, and Password: ${password}`);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Sign Up</Text>

     <Image source={require('../assets/v940-bb-ju-21.jpg')} style={styles.mic} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}  onPress={handleSignup}>Sign Up</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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
    borderRadius:15
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
});

export default SignupScreen;

