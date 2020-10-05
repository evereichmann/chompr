import React, { Component } from 'react';
import { ScrollView, FlatList, View, Button, Text, TextInput, Switch, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 


class ChoosieProcess extends Component {

    state={
        lat : '', 
        lng : '', 
        numChoosers : 1,

    }

    handleNumChange = (change) => {
        this.setState({
            numChoosers : this.state.numChoosers + change 
        })
    }

    renderNameFields = () => {
        let arr = []
        for(let i = 0; i < this.state.numChoosers; i++){
            arr.push('hi')
        }
        return arr.map((chooser, idx) => {
            return <TextInput placeholder='hey everyone ok' key={idx} />
        })
    }

    render() {
        return (
            <View>
                <ScrollView  keyboardShouldPersistTaps='always'>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        onPress={(data, details) => {
                            this.setState({
                                lat : details.geometry.location.lat, 
                                lng: details.geometry.location.lng
                            })
                            console.log(this.state)
                            }
                        }

                        query={{
                            key: 'KEEP IT A SECRET',
                            language: 'en',
                            types: 'geocode'
                        }}
                        currentLocation={false}
                        currentLocationLabel='Current location'
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                    />
                </ScrollView>
                <View style={styles.container}>
                    <Button title='-' onPress={ this.state.numChoosers === 1 ? null : () => this.handleNumChange(-1)}></Button>
                    <Text>{this.state.numChoosers}</Text>
                    <Button title='+' onPress={this.state.numChoosers === 4 ? null : () => this.handleNumChange(1)}></Button>
                </View>
                <View style={styles.container}>
                    {this.renderNameFields()}
                </View>
                <View style={styles.container}>
                    <Switch/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20
    }
  });

export default ChoosieProcess;


