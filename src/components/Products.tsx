import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from "react";
import {ComponentProps} from "./App";
import {Container, Typography, Grid, Box, Card, CardMedia, CardContent, CardActions, Button} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";

import portfolio from "../binary/portfolio.jpg"
import terraformPic from "../binary/terraform.png"

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 450,
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    buttonBox: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
)

function createContent(title: string, description: string, language: string, image: string, url: string): contentType {
  return {title, description, language, image, url}
}

type contentType = {
  title: string,
  description: string,
  language: string,
  image: string,
  url: string,
}

const contentList = [
  createContent(
    "Daiki Murayama's Portfolio",
    "テクニカルスキルを示すポートフォリオです",
    "typescript / ReactJS / Material UI",
    portfolio,
    "https://github.com/dada4386/portfolio"
  ),
  createContent(
    "API Server with IaC",
    "TerraformによるGCPに対するInfrastructure as Codeの実装です。※現在非稼働",
    "GCP / Kubernetes / terraform / CircleCI",
    terraformPic,
    "https://github.com/dada4386/kubernetes-teraform"
  ),
]

const Products: React.FC<ComponentProps> = (props: any) => {
  const classes = props.style;
  const style = useStyle();
  return (
    <Container className={classes.homeDefaultContent}>
      <Container className={classes.centerColumn}>
        {/* header */}
        <Container className={classes.headerContainer}>
          <Box className={classes.centerColumn}>
            <Typography variant="h3">
              <FontAwesomeIcon icon={faDesktop} />&nbsp;
              {props.name}
            </Typography>
          </Box>
        </Container>
        {/* project contents */}
        <Grid container alignItems="center" justify="center" spacing={4}>
          {contentList.map((content) => (
            <Grid item key={content.title} xs={12} sm={6} md={4}>
              <Card className={style.card}>
                <CardMedia className={style.cardMedia} image={content.image} title={"test"}/>
                <CardContent className={style.cardContent}>
                  <Typography gutterBottom variant={"h5"}>
                    {content.title}
                  </Typography>
                  <Typography variant={"body1"}>
                    {content.description}
                  </Typography>
                  <Typography variant={"overline"} >
                    [{content.language}]
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box className={style.buttonBox}>
                    <Button size={"small"} variant={"contained"} color={"primary"} href={content.url}>
                      github
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default Products;
