import {
  DefaultTheme,
  Provider as PaperProvidern,
  Theme,
} from "react-native-paper";

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: "yellow",
    primary: "blue",
  },
};
