import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    padding: 10,
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5
  }
});

export default function App() {
  const [userEmail, emailText] = React.useState('');
  const [userPassword, passwordText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder='User Email'
        onChangeText={text => emailText(text)}
        value={userEmail}
      />
      <TextInput
        style={styles.TextInput}
        placeholder='User Password'
        onChangeText={text => passwordText(text)}
        value={userPassword}
      />
      <Button
        title="Submit"
        onPress={() => logInUser(userEmail, userPassword)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function logInUser (userEmail, userPassword) {
  Alert.alert(userEmail + " - " + userPassword)
}
