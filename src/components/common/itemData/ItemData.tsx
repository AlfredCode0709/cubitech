import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CustomizationSelector from "./CustomisationSelector";
import ItemActionButtons from "./ItemActionButtons";
import ItemImage from "./ItemImage";
import OptionSelector from "./OptionSelector";
import QuantitySelector from "./QuantitySelector";
import SpecialNotes from "./SpecialNotes";
import commonStyles from "../../../styles/common.module.scss";
import { CartContext } from "@/contexts/CartContext";
import { customisations } from "./customisations";
import { options } from "./options";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";

interface FormValues {
  option: string;
  customizations?: string[];
  specialNotes?: string;
  quantity: number;
}

interface ItemDataProps {
  isCubiMart: boolean;
}

const ItemData: FC<ItemDataProps> = ({ isCubiMart }) => {
  const router = useRouter();
  const { id } = router.query;
  const { dispatch } = useContext(CartContext);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      option: "",
      customizations: [],
      specialNotes: "",
      quantity: 1,
    },
  });

  const onSubmit = (data: FormValues) => {
    const itemId = Array.isArray(id) ? id[0] : id ?? "";

    if (!itemId) {
      console.error("Invalid item ID");
      return;
    }

    let newItem = isCubiMart
      ? {
          itemId,
          name: "Item Name",
          price: 9.99,
          brand: "Brand Name",
          option: data.option,
          promotions: ["Promotion 1", "Promotion 2"],
          quantity: data.quantity,
        }
      : {
          itemId,
          name: "Item Name",
          price: 9.99,
          option: data.option,
          customizations: data.customizations || [],
          specialNotes: data.specialNotes,
          quantity: data.quantity,
        };

    dispatch({ type: "ADD_CART_ITEM", payload: { item: newItem, isCubiMart } });

    reset();
  };

  useEffect(() => {
    if (!watch("option") || !watch("quantity")) {
      reset({ option: "", customizations: [], specialNotes: "", quantity: 1 });
    }
  }, [watch, reset]);

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
            <Typography className={commonStyles.itemName}>Item Name</Typography>
            <Typography className={commonStyles.itemPrice}>$9.99</Typography>

            {/* Order Customisation */}
            <Grid container spacing={2}>
              <OptionSelector
                options={options}
                control={control}
                errors={errors}
              />
              <CustomizationSelector
                customisations={customisations}
                control={control}
              />
              <SpecialNotes control={control} />
              <QuantitySelector control={control} errors={errors} />
            </Grid>

            {/* Action Buttons */}
            <ItemActionButtons
              router={router}
              watch={watch}
              reset={reset}
              onSubmit={handleSubmit(onSubmit)}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemData;
