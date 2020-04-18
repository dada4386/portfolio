import * as React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const title = props.title;
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
};

export default Header;
