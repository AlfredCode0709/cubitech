import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../common/CardMediaContainer";
import CustomizationSelector from "./CustomizationSelector";
import ItemActionButtons from "./ItemActionButtons";
import QuantitySelector from "./QuantitySelector";
import OptionSelector from "./OptionSelector";
import SpecialNotes from "./SpecialNotes";
import styles from "../../styles/cubifood.module.scss";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@auth0/nextjs-auth0";
import { useCart } from "@/contexts/CartContext";

interface FormValues {
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

const ItemData: FC<any> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { user } = useUser();

  const { state, dispatch } =
    useCart(); /* Access the cart state and dispatch method */

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
    console.log("Form Submitted:", data);

    const newItem = {
      itemId: Array.isArray(id) ? id[0] : id,
      name: "Item Name" /* Use dynamic name here */,
      price: 9.99 /* Use dynamic price here */,
      option: data.option,
      customizations: data.customizations,
      specialNotes: data.specialNotes,
      quantity: data.quantity,
    };

    console.log(newItem);

    /* Dispatch action to add item to the cart */
    dispatch({ type: "ADD_ITEM", payload: newItem });

    /* Optionally, navigate to the ShoppingCart page */
    router.push("/shoppingcart");
  };

  useEffect(() => {
    if (!watch("option") || !watch("quantity")) {
      reset();
    }
  }, [reset, watch]);

  return (
    <Box className={styles.itemData}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Card variant={"outlined"} className={styles.itemImage}>
              <CardMediaContainer
                imageSrc={"/cubitech_brands/cubifood_light.svg"}
                alt={"Item Image"}
              />
            </Card>
          </Grid>
          <Grid size={8}>
            <Box className={styles.itemContent}>
              <Typography className={styles.itemName}>Item Name</Typography>
              <Typography className={styles.itemPrice}>$9.99</Typography>

              {/* Order Customisation */}
              <Grid container className={styles.orderCustomisation} spacing={2}>
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
                user={user}
                router={router}
                watch={watch}
                reset={reset}
                onSubmit={handleSubmit(onSubmit)}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ItemData;
