import React, {useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WhiteBright from "@material-ui/icons/Brightness4";
import DarkBright from "@material-ui/icons/BrightnessHigh";

const themeLight = createMuiTheme({
  palette: {
    text: {
      primary: "red"
    },
  
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#343a40"
    },
    text: {
      primary: "white"
    }
  }
});

const DarkTheme = () => {
  const [light, setLight] = React.useState(true);
  useEffect(() => {
    console.log(light);
  }, [light])

  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
        {/* {light ? "themeLight" : "themeDark"} */}
      <CssBaseline />
      {light ? (
        <WhiteBright onClick={() => setLight(prev => !prev)} />
      ) : (
        <DarkBright onClick={() => setLight(prev => !prev)} />
      )}
    </MuiThemeProvider>
  );
};

export default DarkTheme;
