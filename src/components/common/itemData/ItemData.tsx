import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CustomisationSelector from "./CustomisationSelector";
import ItemActionButtons from "./ItemActionButtons";
import ItemImage from "./ItemImage";
import OptionSelector from "./OptionSelector";
import ProductOverview from "./ProductOverview";
import PromotionOutline from "./PromotionOutline";
import QuantitySelector from "./QuantitySelector";
import SpecialNotes from "./SpecialNotes";
import commonStyles from "@/styles/common.module.scss";
import { customisations } from "./customisations";
import { options } from "./options";
import { CubiFoodItem, CubiMartItem, useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { FC, Fragment } from "react";

export interface FormValues {
  itemName: string;
  itemPrice: number;
  brandName: string;
  option: string;
  customisations?: string[];
  promotions?: string[];
  specialNotes?: string;
  quantity: number;
}

interface ItemDataProps {
  isCubiMart: boolean;
}

const ItemData: FC<ItemDataProps> = ({ isCubiMart }) => {
  const router = useRouter();
  const { id } = router.query;
  const { dispatch } = useCart();
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      itemName: 'Item Name',
      itemPrice: 9.99,
      brandName: 'Brand Name',
      option: "",
      customisations: [],
      promotions: ["Promotion 1", "Promotion 2"],
      specialNotes: "",
      quantity: 1,
    },
  });

  const itemName = watch('itemName');
  const itemPrice = watch('itemPrice');
  const brandName = watch('brandName');
  const promotions = watch("promotions");

  const onSubmit = (data: FormValues) => {
    const itemId = Array.isArray(id) ? id[0] : id ?? "";
  
    if (!itemId) {
      console.error("Invalid item ID");
      return;
    }

    if (isCubiMart) {
      const newItem: Omit<CubiMartItem, "cartId"> = {
        itemId,
        name: "Item Name",
        price: 9.99,
        brand: "Brand Name",
        option: data.option,
        promotions: data.promotions || [],
        quantity: data.quantity,
      };
      
      dispatch({
        type: "ADD_CART_ITEM",
        payload: newItem,
        isCubiMart: true,
      });
    } else {
      const newItem: Omit<CubiFoodItem, "cartId"> = {
        itemId,
        name: "Item Name",
        price: 9.99,
        option: data.option,
        customisations: data.customisations || [], 
        specialNotes: data.specialNotes ?? "",
        quantity: data.quantity,
      };

      dispatch({
        type: "ADD_CART_ITEM",
        payload: newItem,
        isCubiMart: false,
      });
    }

    enqueueSnackbar("Item successfully added to cart!", {
      variant: "success",
    });

    reset();
  };

  return (
    <Box
      className={commonStyles.itemData}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid size={4}>
          <ItemImage
            imageSrc={
              isCubiMart
                ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
                : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
            }
          />
        </Grid>
        <Grid size={8}>
          <Box className={commonStyles.itemContent}>
            <Typography className={commonStyles.itemName}>{itemName}</Typography>
            <Typography className={commonStyles.itemPrice}>${itemPrice}</Typography>

            {/* Rating - CubiMart only */}
            {isCubiMart === true && (
              <Fragment>
                <Rating
                  className={commonStyles.rating}
                  size={"large"}
                  defaultValue={5}
                />
                <Typography className={commonStyles.brandName}>
                  {brandName}
                </Typography>
                <PromotionOutline promotions={promotions ? promotions : []} />
              </Fragment>
            )}

            {/* Order Customisation */}
            <Grid container columnSpacing={2} rowSpacing={3}>
              <OptionSelector
                options={options}
                control={control}
                errors={errors}
              />

              {isCubiMart === false && (
                <Fragment>
                  <CustomisationSelector
                    customisations={customisations}
                    control={control}
                  />
                  <SpecialNotes control={control} errors={errors}/>
                </Fragment>
              )}

              <QuantitySelector control={control} errors={errors} />
            </Grid>

            {/* Action Buttons */}
            <ItemActionButtons
              router={router}
              watch={watch}
              reset={reset}
              onSubmit={handleSubmit(onSubmit)}
              isCubiMart={isCubiMart}
            />
          </Box>
        </Grid>

        {isCubiMart === true && <ProductOverview />}
      </Grid>
    </Box>
  );
};

export default ItemData;
