import React, {useEffect} from 'react';
import Header from "./Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme, makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import {blueGrey} from "@material-ui/core/colors";
import Top from "./Top";
import About from "./About";
import {ClassNameMap} from '@material-ui/core/styles/withStyles'
import {Link, animateScroll as scroll} from 'react-scroll'

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


const defaultStyles = makeStyles((theme: Theme) =>
  createStyles({
    centerColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      filter: "",
    },
    centerRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      filter: "",
    },
    titleTypography: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 1,
    },
    headerContainer: {
      maxWidth: "sm",
      padding: theme.spacing(8, 0, 6),
    },
    homeDefaultContent: {
      padding: theme.spacing(8, 0, 6),
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
    },
  })
);

type Props = {
  title: string,
}

export type ComponentProps = {
  style: ClassNameMap,
}

const App: React.FC<Props> = (props: Props) =>{
  const classes = defaultStyles()
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={props.title}/>
        <main className={"main"}>
          <section className="Top" />
          <Top style={classes}/>
          <section className="About" />
          <About style={classes} />
        </main>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;


