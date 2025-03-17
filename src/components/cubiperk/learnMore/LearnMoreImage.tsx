import Image from "next/image";
import { FC } from "react";

interface LearnMoreImageProps {
  src: string;
  alt: string;
}

const LearnMoreImage: FC<LearnMoreImageProps> = ({ src, alt }) => {
  return <Image src={src} width={480} height={270} alt={alt} />;
};

export default LearnMoreImage;
