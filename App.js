import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MainNavigator from './app/Router.js';
import NavigationService from 'signature-app-v2/app/services/NavigationService';

export default function SignatureScreen(props) {

  return (
    <View style={styles.container}>
      <MainNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  )
}
SignatureScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});