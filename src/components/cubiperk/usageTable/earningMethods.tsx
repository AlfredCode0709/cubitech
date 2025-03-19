import { Fragment, JSX } from "react";

export interface EarningMethod {
  iconSrc: string;
  descr: JSX.Element | string;
}

export const earningMethods: EarningMethod[] = [
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068676/icon1_bjuvd6.svg",
    descr: (
      <Fragment>
        Use it for transactions inside
        <br />
        CUBITECH app
      </Fragment>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068682/icon2_ne4epl.svg",
    descr: (
      <Fragment>
        Use it to shop online with
        <br />
        CUBIPay or CUBIPayLater
      </Fragment>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068717/icon3_q28ypq.svg",
    descr: (
      <Fragment>
        Use it in-store accepting
        <br />
        CUBIPay or CUBIPayLater
      </Fragment>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068717/icon4_egqic3.svg",
    descr: (
      <Fragment>
        Make transfers
        <br />
        to other CUBIPay users
      </Fragment>
    ),
  },
  {
    iconSrc: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068718/icon5_vtku5l.svg",
    descr: (
      <Fragment>
        Withdraw cash to
        <br />
        your bank account
      </Fragment>
    ),
  },
];
