import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');
 
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details) => {
        // 'details' is provided when fetchDetails = true
        console.log(details.geometry.location);
      }}
      query={{
        key: 'AIzaSyDH44dKqH6vI3l222pyIXtWOi9aCqfLSRU',
        language: 'en',
        types: 'geocode'
      }}
      currentLocation={false}
      currentLocationLabel='Current location'
      enablePoweredByContainer={false}
      fetchDetails={true}
    />
  );
};
 
export default GooglePlacesInput;