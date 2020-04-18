import * as React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Button, Container, Box} from "@material-ui/core";
import {Link} from "react-scroll";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ReactElement} from "react";

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
}

const style = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  }
))

const menuElements = [
  "Top", "About",
]

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
            <Box display="flex" flexDirection={"row"}>
              {menuElements.map((name: string) => (
                <Button color={"inherit"}>
                  <Link activeClass="active" to={name} spy={true} smooth={true} duration={500}>{name}</Link>
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
