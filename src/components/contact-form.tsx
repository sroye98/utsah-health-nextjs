"use client";

import { CalendlyEmbed } from "./calendly-embed";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="mb-4 lg:text-3xl !leading-tight text-3xl text-sky-800 font-bold">
          Contact Us
        </h1>
        <p className="mx-auto w-full lg:w-5/12 !text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <div className="container mx-auto border border-gray/50 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <h4 className="mb-2 text-white">Contact Information</h4>
              <p className="mx-auto mb-8 text-base !text-gray-500">
                Fill up the form and one of our schedulers will get back to you
                shortly.
              </p>
              <div className="flex items-center gap-5">
                <button className="text-white">
                  <i className="fa-brands fa-facebook text-lg" />
                </button>
                <button className="text-white">
                  <i className="fa-brands fa-instagram text-lg" />
                </button>
                <button className="text-white">
                  <i className="fa-brands fa-github text-lg" />
                </button>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 col-span-4 h-full rounded-lg">
              <CalendlyEmbed url="https://calendly.com/saachi-roye/30min" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
