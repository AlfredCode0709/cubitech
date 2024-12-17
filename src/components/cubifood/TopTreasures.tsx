import { merriWeather } from "@/styles/theme";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from '../../styles/cubifood.module.scss';'

const TopTreasures: React.FC<any> = () => {
  return (
    <Box className={styles.topTreasuresContainer}>
      <Typography className={styles.title}>
        Top Treasures
      </Typography>
      <Grid container className={styles.gridContainer} spacing={2}>
        <Grid item xs={4}>
          <Card variant={"outlined"} sx={{ borderRadius: 2, height: "100%" }}>
            <CardActionArea>
              <Box position={"relative"} width={"100%"} paddingBottom={"100%"}>
                <CardMedia
                  component={"img"}
                  image={"./cubitech_brands/cubifood_light.svg"}
                  alt={"CubiFood Default Treasure"}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Box>
              <CardContent sx={{ borderTop: 1, borderColor: "divider" }}>
                <Typography gutterBottom variant={"h6"} component={"div"}>
                  Treasure Name
                </Typography>
                <Typography variant={"body2"} color={"text.secondary"}>
                  Treasure Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color={"primary"} size={"small"}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} container spacing={2}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Card variant={"outlined"} sx={{ borderRadius: 2 }}>
                <CardActionArea>
                  <Box
                    position={"relative"}
                    width={"100%"}
                    paddingBottom={"100%"}
                  >
                    <CardMedia
                      component={"img"}
                      image={"./cubitech_brands/cubifood_light.svg"}
                      alt={"CubiFood Treasure"}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ borderTop: 1, borderColor: "divider" }}>
                    <Typography gutterBottom variant={"h6"} component={"div"}>
                      Treasure Name
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button color={"primary"} size={"small"}>
                    View
                  </Button>
                  <Button color={"primary"} size={"small"}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
};

export default TopTreasures;
