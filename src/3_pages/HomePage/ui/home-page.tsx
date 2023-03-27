import {Text, View} from 'react-native';
import {STYLES} from '../consts/styles';
import AppLoading from 'expo-app-loading';
import {useState} from 'react';
import {loadComponentFonts} from '../lib/loadFonts';

export function HomePage() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View >
        <Text style={STYLES.text}>Home Screen</Text>
      </View>
    )
  } else {
    return (
      <AppLoading
        startAsync={loadComponentFonts}
        onError={() => {console.log('Error occured')}}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}
