export interface KeyValuePairs {
  [key: string]: string;
} 

export interface Themes {
  [key: string]: string | KeyValuePairs;
} 

export interface Colors {
  light: Themes,
  dark: Themes,
}