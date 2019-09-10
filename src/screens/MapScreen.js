import React, {Component} from 'react';
import {View,Dimensions,TouchableWithoutFeedback} from 'react-native';
import {  Button } from 'react-native-elements';
import { Constants, Location, Permissions , MapView,Font} from 'expo';
import RNGooglePlaces from 'react-native-google-places';
import SearchBar from 'react-native-searchbar';
 import { Ionicons } from '@expo/vector-icons';



const height= Dimensions.get('window').height;
const width= Dimensions.get('window').width*0.8;
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyDGDRUz-Wz8ZCHneIPtL-RplaFA8RIeDRE';
const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

class MapScreen extends Component {
   componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }
  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    this.setState({location, region})
  }
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
          visible: false,
          text:''
      };
      onPressButton= () => {
        this.props.navigation.navigate('search');
      }
    render(){
        return(
            <View style={{flex:1}}>
            <MapView 
            provider={'gooogle'}
                style={{ flex: 1 }}
                showsUserLocation={true}
                region={this.state.region}
       >
  </MapView>

<View style={style.sidebarStyle}> 
<Ionicons name="md-menu" size={35} color="black" />
</View>
      </View>
        );
    }
}
const style ={
  buttonStyle:{
    position:'absolute',
    bottom: height*0.8,
    width:320,
    height:35,
    right:30,
    alignSelf: 'center'

  },

  sidebarStyle : {
    position:'absolute',
    bottom: height*0.8,
    width: 25 ,
    height:50,
    right: 35,
    top: 140 
  }
}

export default MapScreen;