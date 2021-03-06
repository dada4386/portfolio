import * as React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Button, Container, Box} from "@material-ui/core";
import {Link} from "react-scroll";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {contentType} from "./App"

type ScrollProps = {
  children: React.ReactElement,
}

const ElevationScroll: React.FC<ScrollProps> = ({children}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

type HeaderProps = {
  title: string,
  contents: contentType[],
}

const style = makeStyles((theme: Theme) =>
  createStyles({
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  }
))

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const title = props.title;
  const classes = style();
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Container className={classes.header} maxWidth={"lg"}>
            <Container>
              <Typography variant="h6">
                {title}
              </Typography>
            </Container>
            <Box className={classes.buttonBox}>
              {props.contents.map((p) => (
                <Button variant="outlined" color={"inherit"}>
                  <Link activeClass="active" to={p.name} spy={true} smooth={true} duration={300}>{p.name}</Link>
                </Button>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
};

export default Header;
