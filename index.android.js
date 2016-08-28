/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Realm from 'realm';
import {CarSchema,PersonSchema} from './RealmStore';
// export  function RealmStore(){
//   const CarSchema = {
//     name: 'Car',
//     properties: {
//       make:  'string',
//       model: 'string',
//       miles: {type: 'int', default: 0},
//     }
//   };
//   const PersonSchema = {
//     name: 'Person',
//     properties: {
//       name:     'string',
//       birthday: 'date',
//       cars:     {type: 'list', objectType: 'Car'},
//       picture:  {type: 'data', optional: true}, // optional property
//     }
//   };
// }
let realm = new Realm({schema:[CarSchema,PersonSchema]});
class RealmTest extends Component {
  write(){
    realm.write(()=>{
      let car = realm.create('Car',{
        make:'Honda',
        model:'Civic',
        miles:750,
      });
      console.log(car.make+'\n'+car.miles);
      console.log(Realm.defaultPath);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.write.bind(this)}>
          let's get start
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RealmTest', () => RealmTest);
