import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage} from '../3_pages/HomePage';
import {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from '../7_shared/lib/useFonts';

export default function App() {
  return (
      <View style={styles.container}>
        <HomePage/>

        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
