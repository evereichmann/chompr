import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Landing from './components/Landing'
import ChoosieProcess from './components/ChoosieProcess'

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
          {/* <Landing /> */}
          <ChoosieProcess/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  // <View style={styles.engine}>
  testStyle : {
    backgroundColor : 'cornflowerblue',
    height: 800, 
    textAlign: "center", 
    fontSize: 50
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
