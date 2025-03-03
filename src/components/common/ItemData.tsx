import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CustomizationSelector from "./itemData/CustomizationSelector";
import ItemActionButtons from "./itemData/ItemActionButtons";
import ItemImage from "../common/ItemImage";
import OptionSelector from "./itemData/OptionSelector";
import QuantitySelector from "./itemData/QuantitySelector";
import SpecialNotes from "./itemData/SpecialNotes";
import commonStyles from "../../styles/common.module.scss";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface FormValues {
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

const ItemData: FC<any> = () => {
  const router = useRouter();

  const { id } = router.query;

  const { dispatch } = useCart();

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

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const customizations = ["Custom 1", "Custom 2", "Custom 3", "Custom 4"];

  const onSubmit = (data: FormValues) => {
    const newItem = {
      itemId: Array.isArray(id) ? id[0] : id,
      name: "Item Name",
      price: 9.99,
      option: data.option,
      customizations: data.customizations,
      specialNotes: data.specialNotes,
      quantity: data.quantity,
    };

    console.log(newItem);

    /* Dispatch action to add item to the cart */
    dispatch({ type: "ADD_ITEM", payload: newItem });

    reset();
  };

  useEffect(() => {
    if (!watch("option") || !watch("quantity")) {
      reset({ option: "", customizations: [], specialNotes: "", quantity: 1 });
    }
  }, []);

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
              router.pathname === `/cubifood/item/[...id]`
                ? "/cubitech_brands/cubifood_light.svg"
                : "/cubitech_brands/cubimart_light.svg"
            }
          />
        </Grid>
        <Grid size={8}>
          <Box className={commonStyles.itemContent}>
            <Typography className={commonStyles.itemName}>Item Name</Typography>
            <Typography className={commonStyles.itemPrice}>$9.99</Typography>

            {/* Order Customisation */}
            <Grid
              container
              className={commonStyles.orderCustomisation}
              spacing={2}
            >
              <OptionSelector
                options={options}
                control={control}
                errors={errors}
              />
              <CustomizationSelector
                customizations={customizations}
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
