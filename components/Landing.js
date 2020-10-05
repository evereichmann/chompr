import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button, 
    View,
    Text,
    StatusBar,
  } from 'react-native';

import ChoosieProcess from './ChoosieProcess'

class Landing extends Component {
    render() {
        return (
          //   main container 
            <View> 
                {/* landing screen badge + button */}
                <View>
                    <Text> Choosr</Text>
                    <Button title='get choosin!'></Button>
                    {/* button redirects to choosieProcess */}
                </View>
            </View>
        );
    }
}

export default Landing;
