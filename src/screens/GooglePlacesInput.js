

import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDGDRUz-Wz8ZCHneIPtL-RplaFA8RIeDRE';
const GooglePlacesInput = () => {
  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }
  return (
   <View></View>
  );
}


export default GooglePlacesInput;