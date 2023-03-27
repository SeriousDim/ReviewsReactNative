import {loadFonts} from '../../../7_shared/lib/font-manager';
import {FONTS} from '../consts/fonts';
import * as Font from 'expo-font';

export const loadComponentFonts = () => Font.loadAsync({
  'nunito-regular': require('../../../7_shared/assets/fonts/NunitoSans-Regular.ttf')
});