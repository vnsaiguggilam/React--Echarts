import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function LayOutTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    },
    text: {
      primary: "white"
    }
  });
  const lightTheme = createMuiTheme({});

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  );
}
export default LayOutTheme;
