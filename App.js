import React from 'react';
import {  StyleSheet,  View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World</Text>
        <View style={styles.box} />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "#F00",
  },

});

export default App;
