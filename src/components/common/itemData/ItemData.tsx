import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
// import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CustomisationSelector from "./CustomisationSelector";
import ItemActionButtons from "./ItemActionButtons";
import ItemImage from "./ItemImage";
import OptionSelector from "./OptionSelector";
// import ProductOverview from "./ProductOverview";
// import PromotionOutline from "./PromotionOutline";
import QuantitySelector from "./QuantitySelector";
import SpecialNotes from "./SpecialNotes";
import commonStyles from "@/styles/common.module.scss";
import { customisations } from "./customisations";
import { options } from "./options";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

export interface FormValues {
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
    const itemId = Array.isArray(id) ? id[0] : (id ?? "");

    if (!itemId) {
      console.error("Invalid item ID");
      return;
    }

    const newItem = isCubiMart
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

    console.log(newItem);

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
            <Typography className={commonStyles.itemName}>Item Name</Typography>
            <Typography className={commonStyles.itemPrice}>$9.99</Typography>

            <Grid container spacing={2}>
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
                  <SpecialNotes control={control} />
                </Fragment>
              )}
              <QuantitySelector control={control} errors={errors} />
            </Grid>
          </Box>

          {/* Action Buttons */}
          <ItemActionButtons
            router={router}
            watch={watch}
            reset={reset}
            onSubmit={handleSubmit(onSubmit)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemData;
