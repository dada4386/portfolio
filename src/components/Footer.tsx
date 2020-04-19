import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-scroll";
import {contentType} from "./App";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Header from "./Header";

type Props = {
  contents: contentType[],
  title: string,
}

const style = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
)


const Footer: React.FC<Props> = (props: Props) => {
  const classes = style();
  return (
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © Daiki Murayama '}
          {new Date().getFullYear()}{'.'}
        </Typography>
    </footer>
  )
};

export default Footer;
