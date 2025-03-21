"use client";

// import Constants from "@/constants";
// import CalendlyEmbed from "./calendly-embed";

const ContactForm = () => {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 lg:text-3xl !leading-tight text-3xl text-sky-800 font-bold">
          Contact Us
        </h1>
        <p className="mx-auto w-full lg:w-5/12 !text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      {/* <CalendlyEmbed url={Constants.CALENDLY_URL} /> */}
    </section>
  );
};

export default ContactForm;
