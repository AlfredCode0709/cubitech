import ContactUsForm from "@/view/contact/ContactUsForm";
import Head from "next/head";
import { FC, Fragment } from "react";

const ContactUs: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <ContactUsForm />
      </main>
    </Fragment>
  );
};

export default ContactUs;
