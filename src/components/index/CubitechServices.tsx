import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/index.module.scss";

const CubitechServices: React.FC<any> = () => {
  const brandAvatars = [
    {
      alt: "CubiFood",
      src: "/cubitech_brands/cubifood_light.svg",
      href: "/cubifood",
    },
    {
      alt: "CubiMart",
      src: "/cubitech_brands/cubimart_light.svg",
      href: "/cubimart",
    },
    {
      alt: "CubiRide",
      src: "/cubitech_brands/cubiride_light.svg",
      href: "/cubiride",
    },
    {
      alt: "CubiPay",
      src: "/cubitech_brands/cubipay_light.svg",
      href: "/cubipay",
    },
    {
      alt: "CubiGift",
      src: "/cubitech_brands/cubigift_light.svg",
      href: "/cubigift",
    },
    {
      alt: "CubiPerk",
      src: "/cubitech_brands/cubiperk_light.svg",
      href: "/cubiperk",
    },
  ];

  return (
    <Box className={styles.cubitechServices}>
      {/* Cubitech Slogan */}
      <Typography className={styles.slogan}>
        One platform, countless solutions - from essentials to opportunities.
      </Typography>

      {/* Cubitech brand avatars */}
      <Box className={styles.brands} gap={2}>
        {brandAvatars.map((avatar, index) => (
          <Link href={avatar.href} key={index}>
            <Avatar
              className={styles.avatar}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CubitechServices;
