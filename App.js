import React from 'react';
import { StyleSheet , View } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import {Font,AppLoading} from 'expo'
import store from "./src/store";
import SignUpForm from './src/screens/SignUpForm';
import SignInForm from './src/screens/SignInForm';
import IntroScreen from './src/screens/IntroScreen';
import MapScreen from "./src/screens/MapScreen";
import DeckScreen from "./src/screens/DeckScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import GooglePlacesInput from './src/screens/GooglePlacesInput';
import NameScreen from './src/screens/NameScreen';
export default class App extends React.Component {

  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount(){
    await Font.loadAsync({

      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });
    this.setState({ fontsAreLoaded: true });
  }


  render() {
    const MainNavigator = createBottomTabNavigator({
      auth: SignUpForm,
      auth2: SignInForm,
      Name:NameScreen,
      welcome: IntroScreen ,
      main: createBottomTabNavigator({
map: MapScreen,
search:GooglePlacesInput,
deck: DeckScreen,
review: createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen
})
      },{
        navigationOptions: {
        tabBarVisible: false
    }
  } ),
      
    }, {
      navigationOptions: {
      tabBarVisible: false
  }
});
if (!this.state.fontsAreLoaded) {
  return <AppLoading />;
}

    return (
      <Provider store={store}>
    <View style={styles.container}>
<MainNavigator/>  
   </View>
      </Provider>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});
