import { JSX } from "react";

export interface EarningMethod {
  iconSrc: string;
  descr: JSX.Element | string;
}

export const earningMethods: EarningMethod[] = [
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068676/icon1_bjuvd6.svg",
    descr: (
      <>
        Use it for transactions inside
        <br />
        CUBITECH app
      </>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068682/icon2_ne4epl.svg",
    descr: (
      <>
        Use it to shop online with
        <br />
        CUBIPay or CUBIPayLater
      </>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068717/icon3_q28ypq.svg",
    descr: (
      <>
        Use it in-store accepting
        <br />
        CUBIPay or CUBIPayLater
      </>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068717/icon4_egqic3.svg",
    descr: (
      <>
        Make transfers
        <br />
        to other CUBIPay users
      </>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068718/icon5_vtku5l.svg",
    descr: (
      <>
        Withdraw cash to
        <br />
        your bank account
      </>
    ),
  },
];
