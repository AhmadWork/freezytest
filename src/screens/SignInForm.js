import React, {Component} from 'react';
import {View,AsyncStorage} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL ='https://us-central1-gathering-d7afd.cloudfunctions.net'
const phone = AsyncStorage.getItem('phone');
class SignInForm extends Component {

state = {phone: '',code:''};

    onSubmit= async () => {

        try{
         
let {data}= await axios.post(`${ROOT_URL}/verifyOneTimePassword`,
{phone:phone,code:this.state.code});

firebase.auth().signInWithCustomToken(data.token);

    }catch(err){
        console.log(err.response.data);
    }
    this.props.navigation.navigate('Name');
}

render(){

    
    return ( 
       

        <View style={styles.viewStyle}>
        <TextInput 
        label='Verify Code'   
        value={this.state.code}
        onChangeText= {code => this.setState({code})}
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

export default SignInForm;