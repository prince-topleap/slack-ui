import React from "react";
import MainLayout from "./containers/mainLayout";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router
} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
