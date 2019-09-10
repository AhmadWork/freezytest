import React, {Component} from 'react';
import {View,AsyncStorage} from 'react-native';
import { TextInput, Button,  } from 'react-native-paper';
import axios from 'axios';
import {AppLoading} from 'expo';
import _ from 'lodash';
const ROOT_URL ='https://us-central1-gathering-d7afd.cloudfunctions.net'
class SignUpForm extends Component {

state = {phone: '', token:null}
async componentWillMount(){
    let token = await AsyncStorage.getItem('token');
  if(token){
      this.props.navigation.navigate('map');
  }else {
      this.setState({token:false});
  }
  }
    onSubmit= async () => {
        try{
await axios.post(`${ROOT_URL}/createUser`,{phone:this.state.phone});


    }catch(err){
        console.log(err.response.data);
    }
    try{
    await  axios.post(`${ROOT_URL}/requestOneTImePassword` ,{phone:this.state.phone});
    }
    catch(err){
        console.log(err.response.data); 
    }
    AsyncStorage.setItem('phone',this.state.phone);
    this.props.navigation.navigate('auth2');
}

render(){
    if(_.isNull(this.state.token)){
        < AppLoading />
     }
    return ( 
        <View style={styles.viewStyle}>
       

        <TextInput   
        label='Phone Number'
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
export default SignUpForm;