import React, {Component} from 'react';
import _ from 'lodash';
import {View, AsyncStorage} from 'react-native';
import Slides from '../components/slides';




const SLIDE_DATA = [
{id:0, text: 'Welcome to JobApp'},
{id:1, text: 'Set your Loaction then swipe away'},  
{id:2, text: 'Are You Ready '}
]
class WelcomeScreen extends Component {
   
    


onSlideComplete(){
    AsyncStorage.setItem('token','ddfd');
    this.props.navigation.navigate('map');
}
    render(){

        return(
            <View style={styles.viewStyle}>
<Slides data={SLIDE_DATA} onComplete={this.onSlideComplete.bind(this)}/>
            </View>
        );
    }
}
const styles = {
    viewStyle:{   
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

}
export default WelcomeScreen;