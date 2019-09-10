import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'خالد الاسطورة',
    text: 'هنا شرح ١',
  
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'عبدالله ',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'أحمد',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
 state = {
    showRealApp: false
  }
  _onDone = () => {
    AsyncStorage.setItem('token','ddfd');
    this.props.navigation.navigate('map');
  }
  render() {
      return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
    }
  }
