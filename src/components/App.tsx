import React from 'react';
import Home from "./home";
import Header from "./header";
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {blueGrey} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey["300"],
      main: blueGrey["500"],
      dark: blueGrey["700"],
    },
  },
  typography: {
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});

type Props = {
  title: string,
}

const App: React.FC<Props> = (props: Props) =>{
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={props.title}/>
        <main className={"main"}>
          <Home />
        </main>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;


