import React, {Component} from 'react';
import {View,AsyncStorage} from 'react-native';
import { TextInput, Button,  } from 'react-native-paper';
import axios from 'axios';
import {AppLoading} from 'expo';
import _ from 'lodash';
const ROOT_URL ='https://us-central1-gathering-d7afd.cloudfunctions.net'
class NameScreen extends Component {

state = {Name: '', token:null}

  
    onSubmit=  () => {
  AsyncStorage.setItem('name',this.state.Name)
    this.props.navigation.navigate('welcome');
}

render(){
    return ( 
        <View style={styles.viewStyle}>
       

        <TextInput   
        label='Name'
        value={this.state.phone}
        onChangeText= {phone => this.setState({phone})}
        />
     
    
      <Button  mode="outlined" onPress={this.onSubmit}>
Submit
  </Button>
        </View>
    );
}

}
const styles = {
    viewStyle:{   
         flex: 1,
        justifyContent: 'center',
        
    }

}
export default NameScreen;