/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: "Hello everybody" };
  }

  render() {
    return (
      <View>
        <Text style={styles.instructions}>{this.props.text}</Text>
        <Text style={styles.instructions}>state: {this.state.isShowing}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri:
        "https://images.unsplash.com/uploads/14135798609283698b7f3/a1364128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    };
    return (
      <View style={styles.container}>
        <Blink text="Приложуха на React Native" />
        <Text style={styles.instructions}>Тут должна быть картинка</Text>
        <Image source={pic} style={{ width: 195, height: 230 }} />
      </View>
    );
  }
}

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
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
