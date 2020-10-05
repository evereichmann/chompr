import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class ChoosieProcess extends Component {
    render() {
        return (
            <ScrollView>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: '',
                        language: 'en',
                    }}
                />
            </ScrollView>
        );
    }
}

export default ChoosieProcess;
