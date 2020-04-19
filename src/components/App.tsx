import React from 'react';
import Header from "./Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme, makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import {blueGrey} from "@material-ui/core/colors";
import Top from "./Top";
import About from "./About";
import Skill from "./Skill";
import Products from "./Products";
import {ClassNameMap} from '@material-ui/core/styles/withStyles'

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
    },
  })
);

export type contentType = {
  name: string,
  content: React.FC<ComponentProps>,
}

function createContent(name: string, content: React.FC<ComponentProps>): contentType {
  return {name, content}
}

const contents = [
  createContent("Top", Top),
  createContent("About", About),
  createContent("Skill", Skill),
  createContent("Products", Products),
]

type Props = {
  title: string,
}

export type ComponentProps = {
  style: ClassNameMap,
  name: string,
}

const App: React.FC<Props> = (props: Props) =>{
  const classes = defaultStyles()
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={props.title} contents={contents}/>
        <main className={"main"}>
          {contents.map((p) => (
            <div>
              <section className={p.name} />
              {p.content({style: classes, name: p.name})}
            </div>
          ))}
        </main>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;


