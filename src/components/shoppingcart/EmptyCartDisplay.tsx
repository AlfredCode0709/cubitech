import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

interface EmptyCartDisplayProps {
  imageSrc: string;
  shopLink: string;
}

const EmptyCartDisplay: FC<EmptyCartDisplayProps> = ({
  imageSrc,
  shopLink,
}) => {
  return (
    <Box className={commonStyles.emptyCartDisplay}>
      <Avatar
        className={commonStyles.avatar}
        alt="Empty Shopping Cart"
        src={imageSrc}
        variant={"square"}
      />
      <Typography className={shopLink === '/cubimart' ? commonStyles.titleVariant1 : commonStyles.titleVariant2}>
        It’s Lonely in Here – Add Items to Your Cart!
      </Typography>
      <Typography className={commonStyles.subtitle}>
        Once you add items, they’ll show up right here in your cart.
      </Typography>
      <Button className={shopLink === '/cubimart' ? commonStyles.buttonVariant1 : commonStyles.buttonVariant2 } size={"large"} href={shopLink}>
        Start Shopping Now
      </Button>
    </Box>
  );
};

export default EmptyCartDisplay;
