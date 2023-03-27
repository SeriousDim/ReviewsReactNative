import {FONT_NAMES} from './consts';
import * as Font from 'expo-font';

export type FontKeys = keyof typeof FONT_NAMES;

export type RequiredFontList = {[key: string]: Font.FontSource};