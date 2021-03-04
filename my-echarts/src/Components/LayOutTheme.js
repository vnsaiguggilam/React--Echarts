import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WhiteBright from "@material-ui/icons/Brightness4";
import DarkBright from "@material-ui/icons/BrightnessHigh";
function LayOutTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  const lightTheme = createMuiTheme({});

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Switch  checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        {/* <WhiteBright />
        <DarkBright /> */}
    </ThemeProvider>
  );
}
export default LayOutTheme;
