import DoorFrontIcon from "@mui/icons-material/DoorFront";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import StoreIcon from "@mui/icons-material/Store";

export const deliverOptions = [
  {
    value: "doorStepDelivery",
    label: "Doorstep Delivery",
    icon: <DoorFrontIcon />,
  },
  {
    value: "selfCollection",
    label: "Self Collection",
    icon: <EmojiPeopleIcon />,
  },
  { value: "storePickup", label: "Store Pickup", icon: <StoreIcon /> },
];
