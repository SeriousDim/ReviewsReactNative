import * as Font from 'expo-font';
import {FONT_NAMES, FONT_PATH} from './consts';
import {FontKeys, RequiredFontList} from './types';

export function generateFontList(fontKeys: FontKeys[])
  : RequiredFontList{
  let result: RequiredFontList = {};

  fontKeys.forEach((value) => {
    result[value] = require(`${FONT_PATH}/${FONT_NAMES[value]}`);
  });

  return result;
}

export function loadFonts(fontKeys: FontKeys[]) {
  return Font.loadAsync(generateFontList(fontKeys));
}
