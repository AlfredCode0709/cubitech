import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress from "@mui/material/LinearProgress";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/cubimart.module.scss";
import { useRouter } from "next/router";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  option: string;
  quantity: number;
}

const ItemData: FC<any> = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      option: "",
      quantity: 1,
    },
  });

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  const ratingsData = [
    { rating: 5, progress: 90 },
    { rating: 4, progress: 75 },
    { rating: 3, progress: 50 },
    { rating: 2, progress: 30 },
    { rating: 1, progress: 10 },
  ];

  return (
    <Box className={styles.itemData}>
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
              <Typography className={styles.brandName}>Brand Name</Typography>

              <Box className={styles.promotionChips}>
                <Typography className={styles.title}>Promotions</Typography>
                <Chip className={styles.chip} label="Promotion 1" />
                <Chip className={styles.chip} label="Promotion 2" />
              </Box>

              {/* Order Customisation */}
              <Grid container className={styles.orderCustomisation} spacing={2}>
                {/* Options - Mandatory */}
                <Grid size={12}>
                  <FormControl fullWidth>
                    <FormLabel>Options</FormLabel>
                    <Controller
                      name="option"
                      control={control}
                      rules={{ required: "Please select one option" }}
                      render={({ field }) => (
                        <RadioGroup row {...field}>
                          {options.map((opt) => (
                            <FormControlLabel
                              key={opt.value}
                              value={opt.value}
                              control={<Radio />}
                              label={opt.label}
                            />
                          ))}
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
                  <FormControl fullWidth>
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
                  </FormControl>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Button
                className={styles.button}
                variant="contained"
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                className={styles.button}
                variant="contained"
                size="large"
                onClick={() => reset()}
              >
                Reset
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

          <Grid size={12} container spacing={2}>
            <Grid size={8}>
              <Card className={styles.productData} variant={"outlined"}>
                <Typography className={styles.productDetailsTitle}>
                  Product Details
                </Typography>
                <Typography className={styles.productDescription}>
                  Product Description
                </Typography>
              </Card>
            </Grid>
            <Grid size={4}>
              <Card className={styles.ratingsData} variant={"outlined"}>
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
                          size={"small"}
                          readOnly
                        />
                      </Grid>
                      <Grid size={5}>
                        <LinearProgress
                          color={"warning"}
                          variant={"determinate"}
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
        </Grid>
      </form>
    </Box>
  );
};

export default ItemData;
