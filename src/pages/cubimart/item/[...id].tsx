import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Head from "next/head";
import styles from "../../../styles/cubimart.module.scss";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

const ITEMS_PER_PAGE = 6;

const ItemView: FC<any> = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      option: "",
      quantity: 1,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = Array.from({ length: 18 });
  const totalPages = Math.ceil(totalItems.length / ITEMS_PER_PAGE);

  const paginatedItems = totalItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const ratingsData = [
    { rating: 5, progress: 90 },
    { rating: 4, progress: 75 },
    { rating: 3, progress: 50 },
    { rating: 2, progress: 30 },
    { rating: 1, progress: 10 },
  ];

  return (
    <>
      <Head>
        <title>Item View | CubiMart</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <Box className={styles.itemView}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Card variant={"outlined"}>
                  <Box className={styles.cardMediaContainer}>
                    <CardMedia
                      className={styles.cardMedia}
                      component={"img"}
                      image={"/cubitech_brands/cubimart_light.svg"}
                      alt={"Item Image"}
                    />
                  </Box>
                </Card>
              </Grid>
              <Grid size={8}>
                <Box className={styles.itemContent}>
                  <Typography className={styles.itemName}>Item Name</Typography>
                  <Typography className={styles.itemPrice}>$9.99</Typography>
                  <Rating
                    className={styles.rating}
                    size={"large"}
                    defaultValue={5}
                  />
                  <Typography className={styles.brandName}>
                    Brand Name
                  </Typography>

                  <Box className={styles.promotionChips}>
                    <Typography className={styles.title}>Promotions</Typography>
                    <Chip className={styles.chip} label="Promotion 1" />
                    <Chip className={styles.chip} label="Promotion 2" />
                  </Box>

                  {/* Options - Mandatory */}
                  <Grid container spacing={2} paddingBottom={"5%"}>
                    <Grid size={12}>
                      <FormControl>
                        <FormLabel>Options</FormLabel>
                        <Controller
                          name="option"
                          control={control}
                          rules={{ required: "Please select one option" }}
                          render={({ field }) => (
                            <RadioGroup row {...field}>
                              <FormControlLabel
                                value="option1"
                                control={<Radio />}
                                label="Option 1"
                              />
                              <FormControlLabel
                                value="option2"
                                control={<Radio />}
                                label="Option 2"
                              />
                              <FormControlLabel
                                value="option3"
                                control={<Radio />}
                                label="Option 3"
                              />
                              <FormControlLabel
                                value="option4"
                                control={<Radio />}
                                label="Option 4"
                              />
                            </RadioGroup>
                          )}
                        />
                        {errors.option && (
                          <Typography color="error">
                            {errors.option.message}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>

                    {/* Quantity - Mandatory (Min: 1, Max: 100) */}
                    <Grid size={4}>
                      <Controller
                        name="quantity"
                        control={control}
                        rules={{
                          required: "Quantity is required",
                          min: { value: 1, message: "Minimum quantity is 1" },
                          max: {
                            value: 100,
                            message: "Maximum quantity is 100",
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Quantity"
                            type="number"
                            variant="outlined"
                            fullWidth
                            error={!!errors.quantity}
                            helperText={errors.quantity?.message}
                            inputProps={{ min: 1, max: 100 }}
                            onChange={(e) => {
                              let value = Number(e.target.value);
                              if (value > 100) value = 100;
                              if (value < 1) value = 1;
                              field.onChange(value);
                            }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  {/* Action Buttons */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<ArrowBackIcon />}
                    sx={{ marginRight: "2.5%" }}
                    onClick={() => router.back()}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AddIcon />}
                    disabled
                    //disabled={!watch("option") || !watch("quantity")}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>

          <Grid container className={styles.productData} spacing={2}>
            <Grid size={8}>
              <Card className={styles.card1} variant={"outlined"}>
                <Typography className={styles.productDetailsTitle}>
                  Product Details
                </Typography>
                <Typography className={styles.productDescription}>
                  Product Description
                </Typography>
              </Card>
            </Grid>
            <Grid size={4}>
              <Card className={styles.card2} variant={"outlined"}>
                <Typography className={styles.ratingsReviewsTitle}>
                  Ratings & Reviews
                </Typography>
                <Box className={styles.ratingRow}>
                  <Typography className={styles.rating}>
                    <span className={styles.score}>4.9</span>/5
                  </Typography>
                  <Rating defaultValue={5} />
                </Box>
                <Typography className={styles.numberOfReviews}>
                  99 reviews
                </Typography>

                <Grid container className={styles.ratingTable} spacing={1}>
                  {ratingsData.map(({ rating, progress }) => (
                    <>
                      <Grid size={5}>
                        <Rating
                          className={styles.rating}
                          value={rating}
                          size="small"
                          readOnly
                        />
                      </Grid>
                      <Grid size={5}>
                        <LinearProgress
                          color={"warning"}
                          variant="determinate"
                          value={progress}
                        />
                      </Grid>
                      <Grid size={2} textAlign={"right"}>
                        <Typography>{progress}</Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Box className={styles.moreItemsView}>
            <Grid container spacing={0.5}>
              <Grid size={6}>
                <Typography className={styles.title}>
                  More items to buy here!
                </Typography>
              </Grid>
              <Grid size={6}>
                {/* Pagination Buttons */}
                {totalPages > 1 && (
                  <Box className={styles.paginationButtons}>
                    <IconButton
                      className={styles.iconButton}
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                    >
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                      className={styles.iconButton}
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                )}
              </Grid>
              <Grid size={12} container paddingTop={"2.5%"}>
                {paginatedItems.map((_, index) => {
                  const globalIndex =
                    (currentPage - 1) * ITEMS_PER_PAGE +
                    index +
                    1; /* Calculate global index */

                  return (
                    <Grid size={2} key={index}>
                      <Card variant={"outlined"} className={styles.card}>
                        <CardActionArea href={`/cubimart/item/${globalIndex}`}>
                          <Box className={styles.cardMediaContainer}>
                            <CardMedia
                              className={styles.cardMedia}
                              component={"img"}
                              image={"/cubitech_brands/cubimart_light.svg"}
                              alt={"Item Image"}
                            />
                          </Box>
                          <CardContent className={styles.cardContent}>
                            <Typography
                              className={styles.name}
                              sx={{
                                marginBottom: "15%",
                              }}
                            >
                              Item Name {globalIndex}
                            </Typography>
                            <Typography className={styles.price}>
                              $9.99
                            </Typography>
                            <Rating
                              className={styles.rating}
                              defaultValue={5}
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default ItemView;
